import React, { useContext, KeyboardEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import style from './Menu.module.css';
import { FirstLevelMenuItem, PageItem } from '../../interface/menu.interface';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

const Menu = (): JSX.Element => {

    const { menu, setMenu, firstCategory } = useContext(AppContext)
    const [announce, setAnnounce] = useState<'close' | 'opened' | undefined>();

    const variants = {

        visible: {
            transition: {
                marginBottom: 20,
                when: 'beforeChildren',
                stagerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0,
        }
    }

    const variantsChildren = {

        visible: {
            opacity: 1,
            height: 29,
        },
        hidden: {
            height: 0,
            opacity: 0,
        }
    }

    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                setAnnounce(m.isOpened ? "close" : "opened")
                m.isOpened = !m.isOpened;
            }
            return m;
        }))
    }

    const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
        if (key.code == 'Enter' || key.code == 'Space') {
            key.preventDefault();
            openSecondLevel(secondCategory);
        }
    }

    const firstLevel = (): JSX.Element => {

        return (<ul className={style.ul}>
            {firstLevelMenu.map(m => (
                <li
                    key={m.route}
                    aria-expanded={m.id == firstCategory}>
                    <Link href={`/${m.route}`}>
                        <a>
                            <div className={cn(style.firstLevel, {
                                [style.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                    </Link>
                    {m.id == firstCategory && secondLevel(m)}
                </li>
            ))}
        </ul>)
    }

    const secondLevel = (menuItem: FirstLevelMenuItem) => {

        return (<ul className={style.secondBlock}>
            {
                menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
                    return (<li key={m._id.secondCategory}>
                        <button
                            onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                            onClick={() => openSecondLevel(m._id.secondCategory)}
                            aria-expanded={m.isOpened}
                            className={style.secondLevel}>
                            {m._id.secondCategory}
                        </button>
                        <motion.ul
                            layout
                            variants={variants}
                            initial={m.isOpened ? 'visible' : 'hidden'}
                            animate={m.isOpened ? 'visible' : 'hidden'}
                            className={style.secondLevelBlock}>
                            {lastLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                        </motion.ul>
                    </li>)
                })
            }
        </ul >)
    }

    const lastLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (pages.map(p => (
            <motion.li
                key={p._id}
                variants={variantsChildren}>
                <Link
                    href={`/${route}/${p.alias}`}>
                    <a
                        tabIndex={isOpened ? 0 : -1}
                        aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
                        className={cn(style.lastLevel, {
                            [style.lastLevelActive]: `/${route}/${p.alias}` == router.asPath
                        })}>
                        {p.category}
                    </a>
                </Link>
            </motion.li>
        )))
    }

    return <nav className={style.menu} role="navigation">
        {announce && <span role="log" className="hide_element">{announce == 'opened' ? 'развернуто' : 'свернуто'}</span>}
        {firstLevel()}
    </nav >
}

export default Menu;
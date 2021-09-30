import React, { FunctionComponent, useState, KeyboardEvent, useRef } from 'react';
import cn from 'classnames';
import style from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { AppContextProvider, IAppContext } from '../context/app.context';
import Up from '../q-components/Up/Up';

const Layout = ({ children }: LayoutProps): JSX.Element => {

    const { wrapper, header, sidebar, content, footer, skipLink, showLink } = style;
    const bodyRef = useRef<HTMLDivElement>(null);
    const [isSkipLink, setIsSkipLink] = useState<boolean>(false)

    const selectSkipLink = (key: KeyboardEvent) => {
        if (key.code == 'Enter' || key.code == 'Space') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLink(false)
    }

    return (<div className={wrapper}>
        <a
            onFocus={() => setIsSkipLink(true)}
            onKeyDown={(key: KeyboardEvent) => selectSkipLink(key)}
            tabIndex={1}
            className={cn(skipLink, {
                [showLink]: isSkipLink
            })}>
            Перейти сразу к содержанию
        </a>
        <Header className={header} />
        <Sidebar className={sidebar} />
        <main className={content} ref={bodyRef} tabIndex={0} role="main">
            {children}
        </main>
        <Footer className={footer} />
        <Up />
    </div>)
}

const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {

        const { menu, firstCategory } = props;
        return (
            <AppContextProvider menu={menu} firstCategory={firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}

export default withLayout;
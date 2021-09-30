import React, { useEffect, useState } from "react";
import cn from "classnames";
import style from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import ButIcon from "../../q-components/ButIcon/ButIcon";
import { motion } from "framer-motion";
import Sidebar from '../Sidebar/Sidebar';
import Logo from "./logo.svg";
import { useRouter } from 'next/router';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  useEffect(() => {
    setIsOpenMenu(false)
  }, [router])

  const variants = {
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', velocity: 2 }
    },
    hide: {
      opacity: 0,
      x: '100%'
    }
  }

  return (
    <header className={cn(style.header, className)} {...props}>
      <div onClick={() => router.push("http://localhost:3000/")} className={style.headerTitle}>
        <Logo />
        <div className={style.logoTitle}>Easy-Top</div>
      </div>
      <div className={style.deskMenu}>
        <a href="#2">Информация</a>
        <a href="#1">Тарифы</a>
        <a href="#3">Личный кабинет</a>
      </div>
      <div className={style.mobMenu}>
        <ButIcon color="white" icon="menu" onClick={() => setIsOpenMenu(true)} />
        <motion.div className={style.mobItemMenu}
          variants={variants}
          initial={'hide'}
          animate={isOpenMenu ? 'show' : 'hide'}>
          <div className={style.mobLogo}>
            <Logo />
            <div className={style.logoTitle}>Easy-Top</div>
          </div>
          <Sidebar />
          <ButIcon color="white" icon="close" className={style.close} onClick={() => setIsOpenMenu(false)} />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

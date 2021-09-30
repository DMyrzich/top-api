import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useScrollY } from "../../hooks/useScrollY";
import style from './Up.module.css';
import { useEffect } from 'react';
import ButIcon from '../ButIcon/ButIcon';

const Up = () => {

    const y = useScrollY();
    const controls = useAnimation();
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight })
    }, [y, controls])

    return (<motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        className={style.up}>
        <ButIcon icon="up" color="primary" onClick={scrollUp} />
    </motion.div>)
}

export default Up;
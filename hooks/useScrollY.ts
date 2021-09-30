import { useState, useEffect } from 'react';

export const useScrollY = (): number => {

    const [scrollY, setScrollY] = useState<number>(0);

    const isWindows = typeof window != 'undefined';
    const handleScroll = () => {
        const currentScrollY = isWindows ? window.scrollY : 0;
        setScrollY(currentScrollY);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollY;
}
import { HTMLAttributes, DetailedHTMLProps } from "react";
import up from './up.svg';
import menu from './menu.svg';
import close from './close.svg';

export const icons = {
    close,
    menu,
    up
};

export type TypeIcon = keyof typeof icons;

export interface ButIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: TypeIcon;
    color: 'white' | 'primary';
}

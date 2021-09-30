import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref' | 'onDrag' | 'onDragEnd' | 'onAnimationStart' | 'onDragStart'> {
    appearance: 'primary' | 'ghost';
    children: ReactNode,
    arrow?: 'down' | 'right' | 'none';
}

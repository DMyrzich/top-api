import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'm' | 's';
    children: ReactNode,
    color: 'ghost' | 'grey' | 'red' | 'green' | 'primary';
    href?: string;
}

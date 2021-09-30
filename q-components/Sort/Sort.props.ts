import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: sortEnum;
    setSort: (sort: sortEnum) => void
}

export enum sortEnum {
    Rate,
    Price
}
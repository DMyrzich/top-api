import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ErrorComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description: string;
}
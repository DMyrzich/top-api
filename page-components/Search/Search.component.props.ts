import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from '../../interface/product.interface';

export interface SearchComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel[];
    query: string;
}
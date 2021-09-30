import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { ProductModel } from '../../interface/product.interface';

export interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel;
}

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../interface/product.interface";
import { TopLevelCategory, TopPageModel } from "../../interface/top-page.interface";

export interface TopPageComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    product: ProductModel[];
}
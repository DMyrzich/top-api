import { HTMLAttributes, DetailedHTMLProps } from "react";
import { ReviewModel } from "../../interface/product.interface";

export interface ReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    review: ReviewModel;
}

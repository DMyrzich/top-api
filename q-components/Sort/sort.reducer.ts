import { sortEnum } from './Sort.props';
import { ProductModel } from '../../interface/product.interface';

export type SortActions = { type: sortEnum.Price | sortEnum.Rate } | { type: 'reset', product: ProductModel[] };

export interface SortReducerState {
    sort: sortEnum;
    product: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {

    switch (action.type) {

        case sortEnum.Rate: {
            return {
                sort: sortEnum.Rate,
                product: state.product.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            }
        }
        case sortEnum.Price: {
            return {
                sort: sortEnum.Price,
                product: state.product.sort((a, b) => a.price > b.price ? -1 : 1)
            }
        }
        case 'reset': {
            return {
                sort: sortEnum.Rate,
                product: action.product
            }
        }
        default: {
            throw new Error('Не верные данные для входа')
        }
    }
}

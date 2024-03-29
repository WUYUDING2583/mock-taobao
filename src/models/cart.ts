import { CartProductType } from '@/@types/product';
import { Effect, Reducer } from 'umi';

export interface CartModelState {
    data: CartProductType[];
};

export interface CartModelType {
    namespace: 'cart';
    state: CartModelState;
    effects: {};
    reducers: {
        saveCart: Reducer<CartModelState>;
    };
}

const CartModel: CartModelType = {
    namespace: 'cart',
    state: {
        data: [],
    },
    effects: {},
    reducers: {
        saveCart(state, action) {
            console.log("action", action);

            return { ...state, ...action.payload };
        }
    },
};
export default CartModel;
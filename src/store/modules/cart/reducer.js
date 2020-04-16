import produce from 'immer';

const initialState = [];

export default function cart(state = initialState, action) {
    switch (action.type) {
        case '@cart/FETCH_CART_SUCCEEDED':
            return action.cart;
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;

                draft.push(product);
            });
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}

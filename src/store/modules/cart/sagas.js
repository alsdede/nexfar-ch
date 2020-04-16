import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/serivces/api';
import { formatPrice } from '~/utils/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* fetchCart() {
    const cartRequest = yield call(api.get, '/cart');
    const cart = cartRequest.data.items;

    yield put({
        type: '@cart/FETCH_CART_SUCCEEDED',
        cart,
    });
}
function* addToCart({ sku }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.product.sku === sku)
    );
    const stockAmount = productExists.product.quantityAvailable;

    // const stock = yield call(api.get, `/stock/${id}`);

    // const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.quantity : 0;

    const quantity = currentAmount + 1;

    if (quantity > stockAmount) {
        Alert.alert(
            'Oops!',
            'Quantidade solicitada insuficiente 😔',
            [{ text: 'OK' }],
            {
                cancelable: true,
            }
        );
        return;
    }
    if (productExists) {
        yield put(updateAmountSuccess(sku, quantity));
    } else {
        const response = yield call(api.post, '/cart/add', {
            sku,
            quantity: 1,
        });
        const product = response.data.map(p => p.sku === sku);
        const data = {
            ...product,
            quantity: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));
    }
}

function* updateAmount({ sku, quantity }) {
    if (quantity <= 0) return;

    // const products = yield call(api.get, 'cart');
    const productExists = yield select(state =>
        state.cart.find(p => p.product.sku === sku)
    );
    const stockAmount = productExists.product.quantityAvailable;
    // const stockAmount = product.data.items.quantity;

    if (quantity > stockAmount) {
        Alert.alert(
            'Oops!',
            'Quantidade solicitada insuficiente 😔',
            [{ text: 'OK' }],
            {
                cancelable: true,
            }
        );
        return;
    }

    yield put(updateAmountSuccess(sku, quantity));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
    takeLatest('@cart/FETCH_CART', fetchCart),
]);

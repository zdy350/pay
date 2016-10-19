import * as types from '../mutation-types';

// initial state
// shape: [{ id, quantity }]
const state = {
    currentPaymode: 'alipay',
    products: [],
    currentCoupon: {}
};

// mutations
const mutations = {
    [types.RECEIVE_PRODUCTS] (state, { products }) {
        state.products = products;
    },
    [types.CHECK_PAYMODE] (state, mode) {
        state.currentPaymode = mode.mode;
    },
    [types.CHECK_COUPON] (state, {coupon}) {
        state.currentCoupon = coupon;
    }
};

export default {
    state,
    mutations
};

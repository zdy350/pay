import * as types from '../mutation-types';
// initial state
const state = {
    all: []
};
// console.log('paymodes');
// mutations
const mutations = {
    [types.RECEIVE_COUPONS] (state, { coupons }) {
        state.all = coupons;
    },
    [types.CHECK_COUPON] (state, { coupon }) {
        state.all.find(p => p.isChecked === true).isChecked = false;
        state.all.find(p => p.id === coupon.id).isChecked = true;
    }
};

export default {
    state,
    mutations
};

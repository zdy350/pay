import * as types from '../mutation-types';
// initial state
const state = {
    all: []
};
// console.log('paymodes');
// mutations
const mutations = {
    [types.RECEIVE_PAYMODES] (state, { modes }) {
        state.all = modes;
    },
    [types.CHECK_PAYMODE] (state, { mode }) {
      // state.all.find(p => p.mode === state.cart)
        state.all.find(p => p.isChecked === true).isChecked = false;
        state.all.find(p => p.mode === mode).isChecked = true;
    }
};

export default {
    state,
    mutations
};

import * as types from '../mutation-types';

// initial state
const state = {
    all: []
};

// mutations
const mutations = {
    [types.RECEIVE_PRODUCTS] (state, { products }) {
        state.all = products;
    }
};

export default {
    state,
    mutations
};

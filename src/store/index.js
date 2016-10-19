import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import cart from './modules/cart';
import paymodes from './modules/paymodes';
import products from './modules/products';
import coupons from './modules/coupons';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        paymodes,
        cart,
        products,
        coupons
    },
    strict: debug
});

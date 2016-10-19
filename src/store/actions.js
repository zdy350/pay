import shop from '../api/shop';
import * as types from './mutation-types';
export const checkPaymode = ({commit}, mode) => {
    if (!mode.isChecked) {
        commit(types.CHECK_PAYMODE, {
            mode: mode.mode
        });
    }
};

export const getAllModes = ({commit}) => {
    shop.getModes(modes => {
        commit(types.RECEIVE_PAYMODES, {modes});
    });
};
export const getAllProducts = ({commit}) => {
    shop.getProducts(products => {
        commit(types.RECEIVE_PRODUCTS, {products});
    });
};

export const getAllCoupons = ({commit}) => {
    shop.getCoupons(coupons => {
        commit(types.RECEIVE_COUPONS, {coupons});
        let coupon = coupons.find((p) => p.isChecked === true);
        commit(types.CHECK_COUPON, {coupon});
    });
};
export const checkCoupon = ({commit}, coupon) => {
    if (!coupon.isChecked) {
        commit(types.CHECK_COUPON, {
            coupon: coupon
        });
    }
};

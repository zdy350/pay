<template>
   <div class="step-block total-block">
        <ul class="total-ul">
            <li class="total-list">
                <span class="infor-desc">
                    <strong class="pro-num">{{products.length}}</strong>
                件商品，总商品金额：
                </span>
                <span class="price">{{proTotal}}</span>
            </li>
            <li class="total-list">
                <span class="infor-desc">
                优惠券：
                </span>
                <span class="price">{{coupon.discount}}</span>
            </li>
            <li class="total-list">
                <span class="infor-desc">
                应付总额：
                </span>
                <span class="price final">{{submitPay}}</span>
            </li>
            <li class="total-list">
                <span class="infor-desc">
                付款方式：
                </span>
                <span class="price final">{{currentPaymode}}</span>
            </li>
        </ul>
        <input class="pay-btn" type="button" name="" value="确认付款" v-on:click="pay()">
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                currentPaymode: 'currentPaymode',
                products: 'cartProducts',
                coupon: 'currentCoupon'
            }),
            proTotal () {
                return this.products.reduce((proTotal, p) => {
                    return proTotal + p.totalprice;
                }, 0);
            },
            submitPay () {
                return this.proTotal - this.coupon.discount;
            }
        },
        methods: {
            pay: function () {
                console.log('pay: ' + this.coupon.discount);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .total-block {
        text-align: right;
    }
    .total-ul {
        margin-right: 20px;
        margin-bottom: 30px;
        padding-top: 18px;
    }
    .total-ul .total-list {
        margin-bottom: 14px;
    }
    .total-list .infor-desc {
        display: inline-block;
        width: 200px;
        color: #222226;
    }
    .total-list .infor-desc .pro-num {
        color: #f7313b;
    }
    .total-list .price {
        display: inline-block;
        width: 100px;
    }
    .price.final {
        color: #f7313b;
        font-size: 24px;
    }
    .pay-btn {
        margin-right: 20px;
        border: none;
        width: 100px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        background-color: #f7313b;
    }
</style>

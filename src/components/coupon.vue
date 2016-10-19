<template>
    <div class="step-block">
        <h2 class="title2">
            使用优惠券
        </h2>
        <ul class="coupon-ul">
            <li v-for="(item,index) in items" :class="{'checked': item.isChecked}" v-on:click="checkCoupon(item)">
                <div class="radio-icon"></div>
                <div class="coupon-box">
                    <div class="coupon-num">
                        <span class="symbol">￥</span>
                        <span class="rmb">{{item.discount}}</span>
                    </div>
                    <ul class="coupon-detail">
                        <li v-for="item2 in item.details">{{item2.msg}}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        computed: mapGetters({
            items: 'allCoupons',
            currentCoupon: 'currentCoupon'
        }),
        methods: mapActions([
            'checkCoupon'
        ]),
        created () {
            this.$store.dispatch('getAllCoupons');
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .coupon-ul {
        margin: 20px;
    }
    .coupon-ul > li {
        margin-bottom: 20px;
        cursor: pointer;
    }
    .coupon-ul .radio-icon {
        position: relative;
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 20px;
        margin-top: 25px;
        border-radius: 8px;
        border: 1px solid #c2c2c2; 
        vertical-align: middle;
    }
    .coupon-ul .checked .radio-icon:before {
        content: " ";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #0d89e9;
    } 
    .coupon-ul .coupon-box {
        width: 306px;
        height: 72px;
        margin-left: 40px;
        box-shadow:
        0 0 #f6f6f6,  
        3px 0 #f6f6f6, 
        0 0 #f6f6f6,  
        0 3px 6px #ccc; /*左边阴影*/ /*右边阴影*/  /*顶部阴影*/ /*底边阴影*/ 
        background-color: #f6f6f6;
        border-left: 6px solid #f60;
        border-right: 6px solid #f60;
        border-image: url(../../static/images/coupon-border.png) 0 6 round;
        border-image-outset: 1;
    }
    .coupon-num {
        float: left;
        margin-top: 12px;
        width: 86px;
        height: 50px;
        padding-right: 6px;
        border-right: 1px dashed #ccc;
        line-height: 52px;
        text-align: center;
        color: #f7313b;
    }
    .coupon-num .symbol {
        font-size: 20px;
    }
    .coupon-num .rmb {
        font-size: 36px;
    }
    .coupon-detail {
        margin-left: 120px;
        padding-top: 10px;
    }
    .coupon-detail li {
        line-height: 26px;
        list-style: square;
        color: #7a7a7a;
    }

</style>

<template>
    <div class="step-block">
        <h2 class="title2">
            选择支付方式
        </h2>
        <p class="ordernumber">
            订单号：<!-- {{ordernumber}} -->
        </p>
        <ul class="paymode-ul">
            <li class="paymode-list" v-for="(item,index) in modes" :class="{'checked': item.isChecked}" v-on:click="checkPaymode(item)">
                <img :src="item.img">
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        computed: mapGetters({
            modes: 'allPaymodes'
        }),
        methods: mapActions([
            'checkPaymode'
        ]),
        created () {
            this.$store.dispatch('getAllModes');
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .ordernumber {
        float: right;
        margin-top: 22px;
        margin-right: 20px;
        color: #7a7a7a;
        font-size: 12px;
    }
    .paymode-ul {
        margin-left: 20px;
        margin-right: 20px;
        padding-bottom: 35px;
    }
    .paymode-ul .paymode-list {
        display: inline-block;
        width: 188px;
        height: 46px;
        margin-right: 24px;
        border: 1px solid #dedede;
        box-shadow: 0 0 0 2px #f7f7f7;
        cursor: pointer;
    }
    .paymode-ul .paymode-list:hover,
    .paymode-ul .paymode-list.checked  {
        border-color: #6cd0ff;  
    }
    .paymode-ul .paymode-list:active {
        box-shadow-color: 0 0 0 2px #e9f8ff;  
    }
</style>

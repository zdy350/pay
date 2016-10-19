<template>
    <div class="main-block">
        <TitleLine></TitleLine>
        <Paymode></Paymode>
        <OlderInfor></OlderInfor>
        <Coupon></Coupon>
        <Submit></Submit>
    </div>
</template>

<script>
    // var bus = new Vue();
    // Vue.use(bus);
    import TitleLine from 'components/title-line';
    import Paymode from 'components/paymode';
    import OlderInfor from 'components/order-infor';
    import Coupon from 'components/coupon';
    import Submit from 'components/submit';
    export default {
        components: {
            TitleLine,
            Paymode,
            OlderInfor,
            Coupon,
            Submit
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .main-block {
        margin: 30px 20px;
    }  
    .step-block {
        border: 1px solid #ccc;
        padding-bottom: 20px;
        border-bottom: none;
    }
    .step-block .title2 {
        display: inline-block;
        margin: 20px;
        font-size: 16px;
        color: #222226; 
    }
</style>

<template>
    <div class="wrap" id="app">
        <HeadNav></HeadNav>
        <MainBlock></MainBlock>
    </div>
</template>

<script>
    import HeadNav from './components/head-nav';
    import MainBlock from './components/main-block';
    export default {
        components: {
            HeadNav,
            MainBlock
        }
    };
</script>

<style>
    @import './assets/css/reset.css';
    @import './assets/css/common.css';
</style>

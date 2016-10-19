<template>
    <div class="step-block">
        <h2 class="title2">
            确认订单信息
        </h2>
        <table class="table" style="border-collapse:separate; border-spacing: 0 10px;">
            <thead>
                <tr>
                    <th class="col1">商品信息</th>
                    <th class="col2">单价（元）</th>
                    <th class="col3">总价（元）</th>
                </tr>
            </thead>
            <tbody v-for="item in items">
                <tr>
                    <td class="col1">
                        <div class="img-box">
                            <img :src="item.img">
                        </div>
                        <h3 class="book-title">{{item.title}}</h3>
                        <h4 class="book-subtitle">{{item.subtitle}}</h4>
                    </td>
                    <td class="col2">
                        {{item.discountprice}}
                        <del>{{item.originalprice}}</del>
                    </td>
                    <td class="col3">
                        {{item.totalprice}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters({
            items: 'allProducts'
        }),
        created: function () {
            this.$store.dispatch('getAllProducts');
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table {
        width: 580px;
        margin: 0 20px;
    }
    .table .col1 {
        width: 300px;
        padding-left: 6px;
        text-align: left;
    }
    .table .col2 {
        width: 150px;
        text-align: left;
    }
    .table .col3 {
        width: 100px;
        text-align: center;
    }
    .table thead th {
        padding-bottom: 6px;
        color: #999;
        font-size: 12px;
    }
    .table tbody tr {
        margin-bottom: 2px;
        background-color: #f5f6f7;
    }
    .table tbody td {
        vertical-align: top;
        font-size: 14px;
    }
    .table .img-box {
        float: left;
        width: 45px;
        height: 66px;
        margin: 6px 14px 6px 0; 
        background-color: #f60;
    }
    .table .book-title {
        padding-top: 6px;
        padding-bottom: 10px;
        color: #006ce5;
    }
    .table .sub-title {
        color: #424f5c;
    }
    .table tbody .col2 {
        padding-top: 10px;
        color: #424f5c;
    }
    .table tbody .col2 del {
        padding-left: 5px;
        font-size: 12px;
        color: #999;
    }
    .table tbody .col3 {
        padding-top: 10px;
        color: #f7313b;
    }
</style>

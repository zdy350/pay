<template>
    <nav class="header-nav" id="head-nav">
        <ul class="nav-ul">
            <li class="nav-list" v-for="(item,index) in items" :class="{'checked': index==items.length-1}">
                <a :href="item.href" target="_blank">{{item.title}}</a>
            </li>
        </ul>
    </nav>  
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        'href': 'http://www.iciba.com/',
                        'title': '书城',
                        'isChecked': false
                    },
                    {
                        'href': 'http://www.iciba.com/',
                        'title': '图书名称',
                        'isChecked': false
                    },
                    {
                        'href': 'http://www.iciba.com/',
                        'title': '结算页',
                        'isChecked': true
                    }

                ]
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*导航栏*/
    .header-nav {
        height: 28px;
        margin: 20px;
        overflow: hidden;
        background-color: #f5f6f7;
    }
    .nav-ul .nav-list {
        display: inline-block;
        margin-left: 15px;
        line-height: 28px;
    }
    .nav-ul .nav-list a {
        display: inline-block;
        color: #808080;
        font-size: 12px;
        line-height: 28px;
        text-decoration: underline;
    }
    .nav-ul .nav-list:after {
        content: '>';
        margin-left: 10px;
        color: #424f5c;
    }
    .nav-ul .nav-list:last-child:after {
        content: none;
    }
    .nav-ul .nav-list a:hover,
    .nav-ul .nav-list.checked a {
        color: #3787ff;
        text-decoration: none;
    }
    .nav-ul .nav-list a:active {
        color: #3673dd;
    }
</style>

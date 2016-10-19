<template>
    <div class="title-line">
        <h1 class="title1">{{title}}</h1>
        <ul class="links-ul">
            <li class="links-list" v-for="item in items">
                <a class="links-list-a" :href="item.href" target="_blank">{{item.msg}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '结算页',
                items: [
                    {
                        'href': 'http://www.iciba.com/',
                        'msg': '我的书城'
                    },
                    {
                        'href': 'http://www.iciba.com/',
                        'msg': '我的课程'
                    }

                ]
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .title-line {
        height: 40px;
    }
    .title1 {
        display: inline-block;
        font-size: 20px;
        color: #808080;
    }
    .links-ul {
        float: right;
    }
    .links-ul .links-list {
        display: inline-block;
        margin-left: 7px;
    }
    .links-list-a {
        display: inline-block;
        width: 88px;
        line-height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        color: #222226;
    }
    .links-list-a:hover {
        background-color: #f2f2f2;
    }
    .links-list-a:active {
        background-color: #d9d9d9;
    } 
</style>

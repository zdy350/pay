/**
 * Mocking client-server processing
 */
const _paymodes = [
    {'mode': 'alipay', 'isChecked': true, 'img': '/static/images/alipay.png'},
    {'mode': 'weixin', 'isChecked': false, 'img': '/static/images/weixin.png'}
];
const _products = [
    {
        'id': 1,
        'img': 'http://wpshr.kingsoft.net:81/application/public/upload/images/book/201605131605371861.png',
        'title': '软件测试之道',
        'subtitle': 'Redis',
        'originalprice': 353.35,
        'discountprice': 353.3,
        'totalprice': 352
    },
    {
        'id': 12,
        'img': 'http://wpshr.kingsoft.net:81/application/public/upload/images/book/201605091502441981.png',
        'title': '九型人格',
        'subtitle': 'Reddgdgis',
        'originalprice': 353.35,
        'discountprice': 353.3,
        'totalprice': 352
    },
    {
        'id': 13,
        'img': 'http://wpshr.kingsoft.net:81/application/public/upload/images/book/201605091502441981.png',
        'title': '九型人格',
        'subtitle': 'Reddgdgis',
        'originalprice': 353.35,
        'discountprice': 353.3,
        'totalprice': 352
    }
];
const _coupons = [
    {
        'id': 33,
        'discount': '56',
        'details': [
            {
                'msg': 'hghihidhk'
            },
            {
                'msg': '235345343'
            }
        ],
        'isChecked': true
    },
    {
        'id': 33342,
        'discount': '5.6',
        'details': [
            {
                'msg': 'hghihidhk'
            },
            {
                'msg': '235345343'
            }
        ],
        'isChecked': false
    },
    {
        'id': 3569653,
        'discount': '8',
        'details': [
            {
                'msg': 'gfgfgffffffff'
            },
            {
                'msg': '235345343'
            }
        ],
        'isChecked': false
    }
];
export default {
    getModes (cb) {
        setTimeout(() => cb(_paymodes), 100);
    },
    getProducts (cb) {
        setTimeout(() => cb(_products), 100);
    },
    getCoupons (cb) {
        setTimeout(() => cb(_coupons), 100);
    }
};

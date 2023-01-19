import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Home from './pages/home.vue'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay.vue'

// vue引用插件
Vue.use(Router)


// 定义动态路由
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'index/',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },
                {
                    path:'/product:id',
                    name:'product',
                    component:Product
                },
                {
                    path:'/detail:id',
                    name:'detail',
                    component:Detail
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm
                },
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay
                }
            ]
        }
    ]
})
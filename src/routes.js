import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '数据管理',
        iconCls: 'fa fa-id-card-o',//图标样式class
        children: [
            { path: '/main', component: Main, name: 'test' },
            { path: '/table', component: Table, name: '处警数据' },
            { path: '/form', component: Form, name: '出警数据' },
            { path: '/user', component: user, name: '反馈数据' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '治安分析',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: 'KPI评估' },
            { path: '/page5', component: Page5, name: '数据汇总' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '统计分析',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: '图表应用' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
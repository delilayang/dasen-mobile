/* tslint:disable */
import Vue, { VueConstructor } from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Orders from './views/Orders.vue';
import User from './views/User.vue';
import Game from './views/Game.vue';
import Funds from './views/Funds.vue';
import UCSetting from './views/uc/Setting.vue';
import { RouteConfig } from 'vue-router/types/router';

Vue.use(Router);

export const enum RouteDirections {
    none,
    forward,
    backward
}

export const routerControl = new Vue({
    data() {
        return {
            direction: RouteDirections.none,
            lastTitle: '首页'
        }
    }
})

interface V2Router extends Router {
    [propName: string]: any;
}

export interface V2RouteConfig extends RouteConfig  {
    meta?: {
        hideNav?: boolean,
        hideTab?: boolean,
        fixedBody?: boolean
    }
}

const routes : V2RouteConfig[] = [
    {
        path: '/',
        name: '首页',
        component: Home
    },
    {
        path: '/orders',
        name: '未结算',
        component: Orders
    },
    {
        path: '/game',
        name: '游戏',
        component: Game,
    },
    {
        path: '/funds',
        name: '资金管理',
        component: Funds,
    },
    {
        path: '/user',
        name: '我的',
        component: User,
        meta: {
            // hideNav: true,
            // fixedBody: true
        }
    },
    {
        path: '/chat',
        name: '聊天室',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "chat" */ './views/Chat.vue'),
        meta: {
            hideTab: true
        }
    },
    {
        path: '/user/setting',
        name: '设置',
        component: UCSetting,
        meta: {
            hideTab: true
        }
    }
]

const router: V2Router = new Router({ routes, linkActiveClass: "active" });

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = parseInt(history.getItem('count') || '') * 1 || 0
history.setItem('/', '0')
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
    endTime = Date.now()
})


methods.forEach(key => {
    let method = router[key].bind(router)
    router[key] = function (...args: any[]) {
        isPush = true
        method.apply(null, args)
    }
})

router.beforeEach((to, from, next) => {
    // set global loading..
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            // set forward direction
            routerControl.direction = RouteDirections.forward
        } else {
            // 判断是否是ios左滑返回
            if (!isPush && (Date.now() - endTime) < 377) {
                // set none direction
                routerControl.direction = RouteDirections.none
            } else {
                // set backward direction
                routerControl.direction = RouteDirections.backward
            }
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount + '')
        to.path !== '/' && history.setItem(to.path, historyCount + '')
        // set forward direction
        routerControl.direction = RouteDirections.forward
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})


router.afterEach(function (to, from) {
    isPush = false
    routerControl.lastTitle = from.name || '';
})

export default router;
<template>
    <div id="app">
        <x-nav v-show="!$route.meta.hideNav"></x-nav>
        <!--<header v-show="!$route.meta.hideNav" class="nav">
            <div @click="$router.go(-1)" class="nav-item">&lt;</div>
            <div class="title">{{$route.name}}</div>
            <div class="nav-item user-links">
                <a href="#" class="nav-link">登录</a>|<a href="#" class="nav-link">注册</a><a href="#" class="nav-link-solid">试玩</a>
            </div>
        </header>-->
        <div class="wrap-router">
            <transition :name="viewTransition" :css="!!viewTransition">
                <router-view class="router-view"></router-view>
            </transition>
        </div>
        
        <div v-show="!$route.meta.hideTab" class="nav-tabs">
            <div class="tab-item"><router-link to="/game"><i class="ico-game"></i>游戏</router-link></div>
            <div class="tab-item"><router-link to="/orders"><i class="ico-orders"></i>未结算</router-link></div>
            <div class="tab-item"><router-link to="/funds"><i class="ico-funds"></i>资金管理</router-link></div>
            <div class="tab-item"><router-link to="/chat"><i class="ico-chat"></i>聊天室</router-link></div>
            <div class="tab-item"><router-link to="/user"><i class="ico-user"></i>我的</router-link></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import XNav from '@/components/nav.vue';
import { routerControl, RouteDirections } from './router';


@Component({
    components: {
        XNav
    }
})
export default class App extends Vue {
    routerControl = routerControl;
    mounted() {
        this.onRouteChange();
    }
    get viewTransition() {
        const dir = this.routerControl.direction;
        if (dir === RouteDirections.none) {
            return '';
        }
        const result = ({
            [RouteDirections.forward]: 'vux-pop-in',
            [RouteDirections.backward]: 'vux-pop-out'
        })[dir];
        return result;
    }

    @Watch('$route')
    onRouteChange() {
        document.body.classList.toggle('lay-fixedbody', !!this.$route.meta.fixedBody);
    }
}
</script>

<style lang="scss">
.router-view {
    width: 100%;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms !important;
    position: absolute;
    width: 100%;
    height: 100vh;
    backface-visibility: hidden;
    perspective: 1000;
}
.vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.l-wrap {
    i{
        margin-right: 0.3em;
        &.iconfont {
            font-weight: bold;
            font-size: 1.2em;
        }
    }
}
</style>

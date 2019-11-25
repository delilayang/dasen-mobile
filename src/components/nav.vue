<template>
    <header v-transfer-dom="false" class="nav">
        <div @click="$router.go(-1)" class="nav-item">
            <div class="nav-left-wrap">
                <div class="back" v-show="routerControl.lastTitle"><a href="javascript:void(0)" class="back-btn">{{routerControl.lastTitle}}</a></div>
                <div class="left-slot"></div>
            </div>
        </div>
        <div class="title">{{$route.name}}</div>
        <div class="nav-item user-links">
            <a href="#" class="nav-link">登录</a>|<a href="#" class="nav-link">注册</a><a href="#" class="nav-link-solid">试玩</a>
        </div>
    </header>
</template>

<script lang="ts">
// vnode stack
import Vue from 'vue';
import Component from 'vue-class-component';
import TransferDom from 'vux/src/directives/transfer-dom';
import { routerControl } from '@/router';

@Component({
    components: {
        // XHeader
    },
    directives: {
        TransferDom
    },
    props: {
        hideBack: Boolean
    }
})
export default class Nav extends Vue {
    routerControl = routerControl;
    created() {
        // alert('sfds')
    }
}
</script>


<style lang="scss" scoped>
@import './theming';

.nav-left-wrap {
    display: flex;
}
.back-btn {
    display: inline-block;
    margin-left: -0.2em;
    margin-top: -0.2em;
    padding: 0.25em;
    padding-left: 1.5em;
    height: 1.5em;
    &:before {
        content: "";
        display: block;
        width: 0.7em; height: 0.7em;
        border: 1px solid #FFF;
        
        transform: rotate(315deg);
        position: absolute;
        margin-top: 0.3em;
        left: 0.9em;
        @include themify() {
            border: 1px solid themed('c-txt-main');
            border-width: 1px 0 0 1px;
        }
    }
}
</style>

<template>
    <div class="sticky-content">
        <!--<header v-transfer-dom="'#app'" class="nav">
            <div @click="$router.go(-1)" class="nav-item">backward</div>
            <div class="title">用戶用戶</div>
            <div class="nav-item user-links">
                用戶！
            </div>
        </header>-->

        <sticky-container>
            <template slot="sticky">
                <user-overview></user-overview>
                <div class="uc-control">
                    <div class="row"><a href="#"><i class="iconfont icon-sharecash"></i>充值</a><a href="#"><i class="iconfont icon-07wallet"></i>提款</a></div>
                </div>
                <!--<img src="/mock/uctop.jpg" alt="" width="100%">-->
            </template>
            <div class="l-wrap">
                <div class="uc-navs">
                    <div class="row"><a href="javascript:void(0)"><i class="iconfont icon-weibiao45128"></i>个人资料</a><a href="javascript:void(0)"><i class="iconfont icon-lock"></i>修改密码</a></div>
                    <div class="row"><a href="javascript:void(0)"><i class="iconfont icon-database-1"></i>资金明细</a><a href="javascript:void(0)"><i class="iconfont icon-iconmybankcard"></i>银行账户</a></div>
                    <div class="row"><a href="javascript:void(0)"><i class="iconfont icon-star"></i>个人咨讯</a><a href="javascript:void(0)"><i class="iconfont icon-classnotes"></i>下注记录</a></div>
                    <div class="row"><a href="javascript:void(0)"><i class="iconfont icon-mail"></i>我的消息</a><a href="javascript:void(0)"><i class="iconfont icon-tag"></i>优惠活动</a></div>
                    <div class="row"><a href="javascript:void(0)"><i class="iconfont icon-send"></i>我的飞单</a><a href="javascript:void(0)"><i class="iconfont icon-note"></i>建议反馈</a></div>
                    <div class="row"><a href="javascript:void(0)"><i class="iconfont icon-book"></i>加盟合作</a><a href="javascript:void(0)"><i class="iconfont icon-icon-1"></i>在线客服</a></div>
                    <div class="row"><router-link to="/user/setting"><i class="iconfont icon-icon-"></i>系统设置</router-link></div>
                </div>
            </div>
        </sticky-container>
    </div>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransferDom from 'vux/src/directives/transfer-dom';
import StickyContainer from '@/components/StickyContainer.vue';
import UserOverview from '@/components/user/Overview.vue';

@Component({
    directives: {
        TransferDom
    },
    components: {
        StickyContainer, UserOverview
    }
})
export default class Games extends Vue {
    txtDynamic = (new Date()).toString();
    created() {
        // todo
    }
    updateTxt() {
        this.txtDynamic = 'updated';
    }
}
</script>


<style scoped="true" lang="scss" scoped>
@import './base';
@import './theming';

.u-wrap {
    background: #235cb3ed;
    height: 9em;
    overflow: hidden;
}
.uc-navs {
    font-size: 1.1em;
    .row {
        display: flex;
        @include themify() {
            border-bottom: 1px solid themed('c-item-border');
        }
        &:last-child {
            border: none;
        }
        a {
            box-sizing: border-box;
            flex: 1 0 50%;
            padding: 0.8em 0;
            text-align: center;

            @extend .tap-active;

            @include themify() {
                background: themed('c-item-bg');
                border-right: 1px solid themed('c-item-border');
                color: themed('c-item-txt');
            }
            &:last-child {
                border: none;
            }
            .iconfont {
                @include themify() {
                    color: themed('c-txt-c-hl');
                }
            }
        }
    }

    table {
        width: 100%;
        table-layout: auto;
        td {
            padding: 0.6em 0;
            text-align: center;
        }
    }
}

.uc-control {
    .row {
        display: flex;
        @include themify() {
            border-bottom: 1px solid themed('c-item-border');
        }
        a {
            box-sizing: border-box;
            flex: 1 0 50%;
            padding: 0.2em 0;
            text-align: center;

            @extend .tap-active;

            @include themify() {
                background: themed('c-bg');
                border-right: 1px solid themed('c-border-darker');
                color: themed('c-control-txt');
            }
            &:last-child {
                border: none;
            }
            i {
                margin-right: 0.3em;
                &.iconfont {
                    font-size: 1.2em;
                    @include themify() {
                        color: themed('c-control-txt');
                    }
                }
            }
        }
    }
}
</style>
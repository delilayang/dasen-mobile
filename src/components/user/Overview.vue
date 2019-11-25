<template>
    <div class="user-overview">
        <div class="avatar"></div>
        <div class="info">
            <div class="info-item"><div class="info-img"></div></div>
            <div class="info-item">
                <p>晚上好，user10</p>
                <p><span>余额：</span><span class="money">365421.10</span><span> 元</span><i class="iconfont icon-Refresh"></i></p>
            </div>
            <div class="info-item">
                <a href="#" class="info-logout">退出登录</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>



<style scoped="true" lang="scss" scoped>
@import './base';
@import './theming';

.user-overview  {
    padding: 1px 0;
    
    @include themify() {
        background: themed('c-bg');
        border: solid 1px #bfbfbf4d;
    }
    .info {
        display: flex;
        padding: 1em 0;
        
        .info-item {
            padding: 0 0.2em;
            &:nth-child(1) {
                width: 24%;
                .info-img {
                    background: url(../../style/images/customer.png);
                    background-size: 100%;
                    width: 4em;
                    height: 4em;
                    border-radius: 50%;
                    box-shadow: 0 0 0px 5px #ffffffa6;
                    margin: 0 0.5em;
                }
            }
            &:nth-child(2) {
                width: 56%;
                p {
                    font-size: 0.8em;
                    margin: 0.5em 0;
                    padding: 0 0.5em;
                    .money {
                        font-size: 1.2em;
                        color: #ffd800;
                    }
                }
            }
            &:nth-child(3) {
                width: 20%;
                .info-logout {
                    font-size: 0.8em;
                    position: absolute;
                    right: 0;
                    top: 3em;
                    background: #0000004d;
                    border: none;
                    border-radius: 30em 0 0 30em;
                    width: 4em;
                    height: 1em;
                    color: #fff;
                    padding: 0.5em 1em 1em 1em;
                }
            }
        }
        .icon-Refresh {
            font-size: 1.2em;
            color: #fc4f68;
            margin-left: 0.3em;
            @include themify() {
                color: themed('c-refresh');
            }
        }
    }
}

</style>
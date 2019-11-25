<template>
    <content-container>
        <div class="uc-setting l-wrap">
            <div class="l-cell">
                <div class="l-cell-item">更换皮肤</div>
                <div class="l-cell-item l-picker-wrap">
                    <div class="CPicker" @click="setSkin('blue')">
                        <span class="CClr" style="background: #007ae0"
                            :class="{active: activeSkin == 'blue'}"
                        ></span>
                        <span>天空蓝</span>
                    </div>
                    <div class="CPicker" @click="setSkin('red')">
                        <span class="CClr" style="background: #fc4f68"
                            :class="{active: activeSkin == 'red'}"
                        ></span>
                        <span>红色</span>
                    </div>
                    <div class="CPicker" @click="setSkin('dark')">
                        <span class="CClr" style="background: #00213d"
                            :class="{active: activeSkin == 'dark'}"
                        ></span>
                        <span>夜间模式</span>
                    </div>
                </div>
            </div>
            <div class="l-cell">
                <div class="l-cell-item">按键声音</div>
                <div class="l-cell-item"><inline-x-switch></inline-x-switch></div>
            </div>
            <div class="l-cell">
                <div class="l-cell-item">游戏列表封盘时间</div>
                <div class="l-cell-item"><inline-x-switch></inline-x-switch></div>
            </div>
            <div class="l-cell">
                <div class="l-cell-item">玩法菜单位置</div>
                <div class="l-cell-item"><inline-x-switch></inline-x-switch></div>
            </div>
        </div>
    </content-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { InlineXSwitch } from '@/common/vux';
import { Skins } from '@/common/types';

declare global {
    var getSkinStr: () => string;
    var setThemeColor: (str: string) => void;
}

@Component({
    components: {
        InlineXSwitch
    }
})
export default class Setting extends Vue {
    activeSkin = Skins.Blue;
    created() {
        this.activeSkin = getSkinStr() as Skins;
    }
    setSkin(skin: string) {
        this.activeSkin = skin as Skins;
        localStorage.setItem('SET_SKIN', skin);
        document.body.className = 'theme-' + skin;
        setThemeColor(skin);
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/theming';

.l-picker-wrap {
    margin-right: -0.5em;
}

.CPicker {
    display: inline-block;
    margin-left: 1em;
    text-align: center;

    @include themify() {
        color: 1px solid themed('c-txt-c');
    }
}

.CClr {
    display: block;
    margin: 0 auto;
    border-radius: 50%;
    width: 3em; height: 3em;
    background: #FFF;
    &.active:after {
        @extend .iconfont;
        content: '\e601';
        font-size: 1.6em;
        line-height: 1.92em;
        color: #FFF;
    }
}
</style>

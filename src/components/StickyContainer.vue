<template>
    <div class="lay-sticky-container">
        <div class="sticky-part" :class="{'sticky-fixed': setFixed}" v-resize.initial="updateSphHeight" ref="stickyPart">
            <slot name="sticky"></slot>
        </div>
        <div v-show="showContent" class="scroll-part">
            <div class="sticky-placeholder" ref="sph"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransferDom from 'vux/src/directives/transfer-dom';
import resize from 'vue-resize-directive';
import { setTimeout } from 'timers';

@Component({
    directives: {
        TransferDom, resize
    }
})
export default class LayStickyContainer extends Vue {
    elLastCloned: Node | null = null;
    showContent = false;
    setFixed = false;
    mounted() {
        // this.$nextTick(this.updateSphHeight);
        setTimeout(() => {
            this.updateSphHeight();
            this.showContent = true;
            this.setFixed = true;
        }, 60);
    }
    updated() {
        this.$nextTick(this.updateSphHeight);
    }
    updateSticky() {
        const elCloned = (this.$refs.stickyPart as Element).cloneNode(true);
        const elSph = this.$refs.sph as Element;
        if (this.elLastCloned) {
            elSph.replaceChild(elCloned, this.elLastCloned);
        } else {
            elSph.appendChild(elCloned);
        }
        this.elLastCloned = elCloned;
    }

    updateSphHeight() {
        const h = (this.$refs.stickyPart as HTMLElement).offsetHeight;
        (this.$refs.sph as HTMLElement).style.height = h + 'px';
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base';
@import '../style/theming';
.sticky-placeholder {
    opacity: 0;
}
.sticky-part {
    @include header-font;
    position: absolute;
    width: 100%; max-width: 600px;
    @include navHeight(top);
}
.sticky-fixed {
    position: fixed;
}
.sticky-placeholder {
    @include header-font;
    @include navHeight(padding-top);
}
.scroll-part {
    @include tabsHeight(padding-bottom);
}
</style>

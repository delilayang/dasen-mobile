<template>
    <div class="wrap-content" 
        :class="{
            'no-nav': noNav,
            'no-tab': noTab
        }"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    props: {
        noNav: {
            type: Boolean,
            required: false,
            default: false
        },
        noTab: {
            type: Boolean,
            required: false,
            default: false
        }
    }
})
export default class ContentContainer extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../style/base';
@import '../style/theming';

.wrap-content {
    //with header
    box-sizing: border-box;

    @include navHeight(padding-top);

    @include themify() {
        background: themed('c-paper-bg');
    }
    @include tabsHeight(padding-bottom);
    &.no-nav {
        @include navHeight(padding-top, false);
    }
    &.no-tab {
        @include tabsHeight(padding-bottom, false);
    }
}

</style>

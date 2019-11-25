<template>
    <div class="fixed-content">
        <header v-transfer-dom="'#app'" class="nav">
            <div @click="$router.go(-1)" class="nav-item">backward</div>
            <div class="title">用戶用戶</div>
            <div class="nav-item user-links">
                用戶！
            </div>
        </header>
        <!--
        <div class="lay-sticky u-wrap">
            <img src="/mock/user.jpg" alt="" width="100%">
        </div>
        -->
        <div class="sticky-part">
                        <h1>user!</h1>
                                    <h1>user!</h1>
        </div>
        <div class="scroll-part">
            <img src="/mock/user.jpg" alt="" width="100%">
            <h1>user!</h1>
        </div>
    </div>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransferDom from 'vux/src/directives/transfer-dom';

@Component({
    directives: {
        TransferDom
    }
})
export default class Games extends Vue {
}
</script>


<style scoped="true" lang="scss">
.u-wrap {
    background: #235cb3ed;
    height: 9em;
    overflow: hidden;
}
</style>
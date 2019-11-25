<template>
    <content-container>
        {{gs.data.aaa + 'BBB'}}
        <img src="/mock/game.jpg" alt="" width="100%">
        <img src="/mock/game.jpg" alt="" width="100%">
    </content-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-inversify-decorator';
import GameService from '@/services/Game';

@Component
export default class Games extends Vue {
    @Inject() gs!: GameService;
    created() {
        const a = this.gs.data;
        // console.log(a.aaa);
    }
}
</script>

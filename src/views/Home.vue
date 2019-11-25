<template>
    <content-container>
        <swiper class="swiper"
            :list="slides" :aspect-ratio="0.38" :auto="true"
            dots-position="center"
            :show-desc-mask="false"
        ></swiper>
        <div class="l-well home">
            <div class="frame broadcast">
                <ul><li><a href="javascript:">公告：快来看~！这是一条超吸引人的跑马灯公告这是一条超吸引人的跑马灯公告</a></li></ul>
            </div>
            <div class="frame quick">
                <a href="javascript:"><i class="ico-charge"></i>充值</a>
                <a href="javascript:"><i class="ico-activity"></i>优惠活动</a>
                <a href="javascript:"><i class="ico-games"></i>更多游戏</a>
                <a href="javascript:"><i class="ico-service"></i>在线客服</a>
            </div>
            <div class="guide">
                <div class="ttl"><i class="iconfont icon-remen"></i> 热门游戏</div>
                <div class="appdl"><a href="javascript:"><i class="iconfont icon-download"></i> APP</a></div>
                <div class="edit"><a href="javascript:">编辑</a></div>
            </div>
            <div class="frame games">
                <a href="javascript:">
                    <img src="/img/g_mssc.png"> <span class="name">秒速赛车</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-mspk10nn.png"> <span class="name">pk10牛牛</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-msft.png"> <span class="name">秒速飞艇</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g_mssc.png"> <span class="name">秒速赛车</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-mspk10nn.png"> <span class="name">pk10牛牛</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-msft.png"> <span class="name">秒速飞艇</span>
                </a>
                <!-- <a href="javascript:">
                    <img src="/img/h-bjsc.png"> <span class="name">北京赛车</span>
                </a> -->
                <a href="javascript:">
                    <img src="/img/g_mssc.png"> <span class="name">秒速赛车</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-mspk10nn.png"> <span class="name">pk10牛牛</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-msft.png"> <span class="name">秒速飞艇</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g_mssc.png"> <span class="name">秒速赛车</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-mspk10nn.png"> <span class="name">pk10牛牛</span>
                </a>
                <a href="javascript:">
                    <img src="/img/g-mspk10nn.png"> <span class="name">pk10牛牛</span>
                </a>
            </div>
        </div>
        
        <!-- <img style="margin-top: 20px;" src="/mock/home.png" alt="" width="100%"> -->
    </content-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Swiper } from '@/common/vux';

@Component({
    components: {
        Swiper
    }
})
export default class Games extends Vue {
    slides = [
        {
            url: 'javascript:',
            img: 'temp/slide.jpg'
        },
        {
            url: 'javascript:',
            img: 'temp/slide.jpg'
        },
        {
            url: 'javascript:',
            img: 'temp/slide.jpg'
        }                
    ]
}
</script>


<style scoped="true" lang="scss">
@import './theming';
@import './layout';

.swiper {
    box-shadow: 0 0 13px #4a4a4ab0;
    z-index: 100;
    @include adjustBrightness();
}
.user-links {
    font-size: 0.95em;
}
.home {
    //font-size: 0.9em;
    
    .frame {
        border-radius: 0.4em;
        padding: 0.8em;
        margin-bottom: 0.8em;
    }
    .broadcast {
        font-size: 0.9rem;
        padding: 0.7em 1.6em 0.6em;
        padding-left: 4em;
        border-radius: 0 0 1.5em 1.5em;
        
        position: relative;
        white-space: nowrap;
        li {
            //height: 1em;
            a {
                display: block;
                overflow-x: hidden;
                text-overflow: ellipsis;
            }
        }
        &:before {
            @extend .iconfont;
            content: '\e611';
            position: absolute;
            left: 0.9em; top: 0;
            font-size: 1.8em;
        }
    }
    .quick {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        
        a {
            flex: 0 1 21%;
            text-align: center;
        }
        i {
            @extend .l-icobg;
            height: 2.1em;
            margin-bottom: 0.5em;
            margin-top: 0.3em;
            @each $theme-name, $map in $themes {
                .theme-#{$theme-name} &.ico-charge {
                    background-image: url('../style/images/#{$theme-name}/charge.png');
                }
                .theme-#{$theme-name} &.ico-activity {
                    background-image: url('../style/images/#{$theme-name}/activity.png');
                }
                .theme-#{$theme-name} &.ico-games {
                    background-image: url('../style/images/#{$theme-name}/games.png');
                }
                .theme-#{$theme-name} &.ico-service {
                    background-image: url('../style/images/#{$theme-name}/service.png');
                }
            }
        }        
    }
    .guide {
        display: flex;
        line-height: 1.5;
        font-size: 1.1em;
        margin: -0.2em 0.4em 0.2em;
        & > div {
            flex: 0 0 auto;
        }
        .ttl {
            flex-grow: 1;
        }
        .appdl {
            flex-basis: 4.3em;
        }
    }
    .games {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        a {
            flex: 0 0 21%;
            text-align: center;
            img {
                display: inline-block;
                height: 4.3em;
                border-radius: 50%;
                box-shadow: 0 2px 2px #8c8c8c75;
                @include adjustBrightness();
            }
            .name {
                display: block;
                text-align: center;
                //margin-top: -0.8em;
            }
            margin-bottom: 1em;
        }
    }
    @include themify() {
        color: themed('c-txt-c');
        a {
            color: themed('c-txt-c');
        }
        .frame {
            background: themed('c-home-fg');
            box-shadow: 0 0 13px themed('c-shadow');
        }
        .broadcast {
            box-shadow: 0 1px 13px themed('c-shadow');
            &:before {
                color: themed('c-txt-hl');
            }
        }
        .games, .guide, .broadcast {
            color: themed('c-item-txt');
            a {
                color: themed('c-item-txt');
            }
        }
    }
}
.home-block {
    background: #F00;
}
</style>

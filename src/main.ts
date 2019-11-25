import 'reflect-metadata';

import Vue from 'vue';
import App from './App.vue';
import Component from 'vue-class-component';
import router from './router';
import store from './store';
import './registerServiceWorker';

import 'normalize.css';
import './style/main.scss';

import ContentContainer from '@/components/ContentContainer.vue';
import StickyContainer from '@/components/StickyContainer.vue';

// 注册常用的全局组件
Vue.component('ContentContainer', ContentContainer);
Vue.component('StickyContainer', StickyContainer);

import { Provide } from 'vue-inversify-decorator';
import serviceContainer from './services';

Vue.config.productionTip = false;

@Component({
  router,
  store,
  render: (h) => h(App)
})
@Provide(serviceContainer)
class MyApp extends Vue {
  // empty
  created() {
    // TODO: detect wrong route and jump to home
  }
}

new MyApp().$mount('#app');

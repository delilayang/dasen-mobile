declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '@cxteam/vux-build/*.js' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vux/src/directives/*' {
  import { DirectiveOptions } from 'vue/types/options';
  const directive : DirectiveOptions;
  export default directive;
}

declare module 'vue-resize-directive' {
  import { DirectiveOptions } from 'vue/types/options';
  const directive : DirectiveOptions;
  export default directive;
}
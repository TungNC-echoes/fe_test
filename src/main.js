import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueI18n from 'vue-i18n';
import jaMessage from './langs/ja.json';
import enMessage from './langs/en.json';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueI18n);

const messages = {
  ja: jaMessage,
  en: enMessage
};

const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages,
  fallbackLocale: 'ja'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

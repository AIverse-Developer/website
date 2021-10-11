/* eslint-disable */
import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import cn from './cn.js'
import en from './en.js'
Vue.use(VueI18n)
export const defaultLang = 'cn';
export const langs = [
 {
   lang: 'en',
   flag: false,
   name: 'English',
   title: 'EN'
 },
 {
   lang: 'tc',
   flag: false,
   name: '繁體中文',
   title: 'TC'
 },{
  lang: 'cn',
  flag: false,
  name: '简体中文',
  title: 'CN'
}]
import {
  GetQueryString
} from "@/assets/js/util.js";
let url = decodeURIComponent(window.location.href);
let urlLang = GetQueryString("lang");
let localeLang = localStorage.getItem("lang");
let navigatorLang = (navigator.languages ?
  navigator.languages[0] :
  navigator.language || navigator.userLanguage
).toLowerCase();
if (langs.findIndex(val => val.lang === urlLang) !== -1) {
  localStorage.setItem("lang", urlLang);
} else if (langs.findIndex(val => val.lang === localeLang) !== -1) {
  localStorage.setItem("lang", localeLang);
} else if (langs.findIndex(val => val.lang === navigatorLang) !== -1) {
  localStorage.setItem("lang", navigatorLang);
} else {
  localStorage.setItem("lang", defaultLang);
}
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'cn',
  messages: {
    'cn': cn,
    'en': en,
  }
})


locale.i18n((key, value) => i18n.t(key, value))
export default i18n;

import Vue from 'vue';
import VueI18n from "vue-i18n";
import VeeValidate from "vee-validate";
import enLang from "./lang/en";
import arLang from "./lang/ar";

const messages = {
    en: enLang,
    ar: arLang
};

Vue.use(VueI18n);
Vue.use(VeeValidate, {
    errorBagName: 'errors',
    fieldsBagName: 'fields',
    delay: 0,
    locale: localStorage.getItem("locale") || "en",
    dictionary: messages,
    strict: false,
    enableAutoClasses: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    }
});

export const i18n = new VueI18n({
    locale: localStorage.getItem("locale") || "en",
    messages,
});


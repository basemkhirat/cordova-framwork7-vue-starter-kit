/**
 * F7 Themes
 * Avaiable themes ['ios', 'material']
 */
const theme = 'ios';

import Vue from 'vue';
import App from './components/App.vue';
import VueResource from 'vue-resource';
import VueCordova from 'vue-cordova';
import Framework7Vue from 'framework7-vue';

import Routes from './routes';
import {store} from './store/store';
import {i18n} from "./i18n";

require('framework7');
require('framework7/dist/css/framework7.' + theme + '.min.css');
if (store.getters.direction === "rtl") require('framework7/dist/css/framework7.' + theme + '.rtl.min.css');
require('framework7/dist/css/framework7.' + theme + '.colors.min.css');
require('framework7-icons/css/framework7-icons.css');

Vue.use(VueResource);
Vue.use(Framework7Vue);
Vue.use(VueCordova, {});

Vue.conf = require("./config").items;
Vue.prototype.$config = Vue.conf;

/**
 *  Application object
 */
Vue.app = {

    vue: false,

    cordova: false,

    f7: false,

    mainView: false,

    dom: false,

    i18n: i18n,

    store: store,

    initialize: function () {

        const self = this;

        /**
         * set API base url
         * @type {string}
         */
        Vue.http.options.root = Vue.app.config.get("url");

        /**
         * append access token to every request
         */
        if (Vue.app.auth.check()) {
            Vue.http.interceptors.push(function (request, next) {
                request.params['token'] = Vue.app.auth.token();
                next();
            });
        }

        /**
         * Native click sound
         */
        Vue.cordova.on('deviceready', function () {
            nativeclick.watch(['sound-click', 'button', 'a']);
        });

        /**
         * initializing vue instance
         * @type {Vue$3|Vue}
         */
        this.vue = new Vue({
            el: '#app',
            render: h => h(App),
            i18n,
            store,
            framework7: {
                root: '#app',
                material: Vue.app.isMaterial(),
                pushState: true,
                animateNavBackIcon: true,
                routes: Routes,
                dynamicNavbar: true,
                swipePanel: Vue.app.isRTL() ? "right" : "left",
                modalTitle: i18n.t("name"),
                modalButtonOk: i18n.t("ok"),
                modalButtonCancel: i18n.t("cancel"),
                notificationTitle: i18n.t("name"),
                notificationHold: 1000,
            },
            mounted: function () {

                // On Framework init
                document.addEventListener("page:init", function (page) {
                    if(!Vue.app.f7) {
                        Vue.app.f7 = Vue.app.vue.$f7Router.framework7;
                        Vue.app.dom = Vue.app.vue.$f7Router.dom7;
                    }
                });

                // On offline connection
                document.addEventListener("offline", function () {
                    Vue.app.f7.addNotification({
                        message: Vue.app.trans("offline_message"),
                        hold: false
                    });
                }, false);

                // On online connection
                document.addEventListener("online", function () {
                    // Don't do any thing
                    // Vue.app.f7.addNotification({ message: Vue.app.trans("online_message"), hold: false });
                }, false);
            }
        });

    },

    on: function (service, callback) {

        return document.addEventListener(service, function () {
            callback(Vue.app);
        });

    },

    /**
     * application config
     */
    config: {

        /**
         * get config item value
         * @param item
         * @returns {boolean}
         */
        get: function (item) {
            return Vue.conf[item] !== undefined ? Vue.conf[item] : false;
        },

        /**
         * set config item value
         * @param name
         * @param value
         */
        set: function (name, value) {
            Vue.conf[name] = value;
        }

    },

    auth: {

        /**
         * get logged user
         * @returns {boolean}
         */
        user: function (field) {

            if (field) {
                return store.getters.user[field] !== undefined ? store.getters.user[field] : false;
            }

            return store.getters.user;
        },

        /**
         * get user token
         * @returns {Vue.app.auth.token|*|getters.token|null|token}
         */
        token: function () {
            return store.getters.token;
        },

        /**
         * get user token expiration
         * @returns {*|getters.expiration|number|expiration}
         */
        expiration: function () {
            return store.getters.expiration;
        },

        /**
         * check user
         * @returns {boolean}
         */
        check: function () {

            if (store.getters.auth) {
                return true;
            }

            return false;
        },


        logout: function () {

            Vue.app.f7.showIndicator();

            Vue.app.store.commit('logout');

            Vue.app.f7.addNotification({
                title: Vue.app.trans('logout'),
                message: Vue.app.trans('logout_success'),
                hold: 2500
            });

            setTimeout(function () {
                Vue.app.f7.hideIndicator();
                Vue.app.router.load("/");
            }, 3000);

        }
    },

    /**
     * get current locale
     * @returns {string}
     */
    theme: function () {
        return theme;
    },

    /**
     * check current theme if IOS
     * @returns {boolean}
     */
    isIOS: function () {
        return this.theme() === "ios";
    },

    /**
     * check current theme if android/material
     * @returns {boolean}
     */
    isMaterial: function () {
        return this.theme() === "material";
    },

    /**
     * get current application locale
     */
    locale: function () {
        return this.store.getters.locale;
    },

    /**
     * get current application direction
     * @returns {string}
     */
    direction: function () {
        return this.store.getters.locale === "ar" ? "rtl" : "ltr";
    },

    /**
     * check current application direction if rtl
     * @returns {boolean}
     */
    isRTL: function () {
        return this.direction() === "rtl";
    },

    /**
     * check current application direction if ltr
     * @returns {boolean}
     */
    isLTR: function () {
        return this.direction() === "ltr";
    },

    /**
     * get translations
     * @param key
     * @returns {TranslateResult|VueI18n.TranslateResult|*}
     */
    trans: function (key) {
        return this.i18n.t(key, this.store.getters.locale)
    },

    /**
     * application router object
     */
    router: {

        /**
         * redirect to a given url
         * @param url
         * @returns {*}
         */
        load: function (url) {
            return Vue.app.vue.$f7Router.framework7.mainView.router.loadPage(url);
        },

        /**
         * redirect to previous url
         * @returns {*}
         */
        back: function () {
            return Vue.app.vue.$f7Router.framework7.mainView.router.back();
        }
    }
};

Vue.prototype.$app = Vue.app;

// APP init

Vue.app.initialize();

// Fix android Back behaviour

document.addEventListener('deviceready', () => {

    // Bind to the back button for Android

    document.addEventListener('backbutton', function () {

        // NOTE: The back button will behave differently depending on circumstance
        // If the side panel is open, close it
        if (document.querySelector('.panel-left.active')) {
            // This will do nothing when the split-view is open
            return window.f7.closePanel();
        }
        // Close modals
        // @TODO How to handle modals we shouldn't close like a login-screen?
        if (document.querySelector('.modal-in')) {
            return f7.closeModal();
        }
        // If we have a back button, we want it to go back
        if (f7.mainView.history.length > 1) {
            return f7.mainView.router.back();
        }
        // Default to closing the app
        return window.navigator.app.exitApp();
    });

});


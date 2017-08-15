/**
 * F7 Themes
 * Avaiable themes ['ios', 'material']
 */
const theme = 'material';

import Vue from 'vue';
import App from './components/App.vue';
import Framework7Vue from 'framework7-vue';
import VueResource from 'vue-resource';
import VueCordova from 'vue-cordova'
import VueConfig from "vue-config";
//import VueAuth from "./auth";
import Routes from './routes';
import {store} from './store/store';
import {i18n} from "./i18n";

require('framework7');
require('framework7/dist/css/framework7.' + theme + '.min.css');


if (store.getters.locale == "ar") {
    require('framework7/dist/css/framework7.' + theme + '.rtl.min.css');
}

require('framework7/dist/css/framework7.' + theme + '.colors.min.css');
require('framework7-icons/css/framework7-icons.css');

Vue.use(VueConfig, require('./config'));
Vue.use(VueResource);
Vue.use(Framework7Vue);
Vue.use(VueCordova, {});

Vue.http.options.root = 'http://52.48.72.75:1337/';


// Vue wrapper

Vue.app = {

    vue: false,

    f7: false,

    i18n: i18n,

    store: store,

    initialize: function () {

        const self = this;

        // append access token to every request

        if (Vue.app.auth.check()) {
            Vue.http.interceptors.push(function (request, next) {
                request.params['token'] = self.store.getters.token;
                next();
            });
        }


        // F7 init

        this.f7 = new Framework7({
            root: '#app',
            material: theme == 'material',
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
        });

        this.f7.on('page:init', function (e) {

        });
        this.f7.onPageInit('home', function (page) {
            console.log(page.name + ' initialized');
        });

        this.vue = new Vue({
            el: '#app',
            render: h => h(App),
            i18n,
            store,
            framework7: {
                root: '#app',
                material: theme == 'material',
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
            }

        });
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
        }
    },

    theme: function () {
        return theme;
    },

    locale: function () {
        return this.store.getters.locale;
    },

    direction: function () {
        return this.store.getters.locale == "ar" ? "rtl" : "ltr";
    },

    isRTL: function () {
        return this.direction() == "rtl";
    },

    isLTR: function () {
        return this.direction() == "ltr";
    },

    trans: function (key) {
        return this.i18n.t(key, this.store.getters.locale)
    },

    route: function (url) {
        return this.vue.$f7Router.framework7.mainView.router.reloadPage({url: url, force: true});
    },

    back: function () {
        return this.vue.$f7Router.framework7.mainView.router.back();
    }
};

Vue.prototype.$app = Vue.app;

// APP init

Vue.app.initialize();

// Native sound click

Vue.cordova.on('deviceready', function () {
    nativeclick.watch(['sound-click', 'button', 'a']);
});

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


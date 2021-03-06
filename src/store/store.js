import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user';
import Post from './modules/post';

Vue.use(Vuex);

const state = {
    locale: localStorage.getItem("locale") || "en"
};

const getters = {
    locale: function (state) {
        return state.locale;
    },
    direction: function (state) {
        return state.locale == "ar" ? "rtl" : "ltr";
    }
};

const mutations = {
    locale: function (state, locale) {
        state.locale = locale;
        localStorage.setItem("locale", locale);

    }
};

const actions = {};

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: [
        User,
        Post
    ]
});

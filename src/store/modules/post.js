import Vue from 'vue';

export default {

    state: {
        posts: [],

    },

    getters: {

        posts: function (state) {
            return state.posts;
        }

    },

    mutations: {

        posts: function (state, posts) {
            state.posts = posts;
        },

    },

    actions: {

        posts: function (store, posts) {
            return Vue.http.get("post", []).then(function (response) {
                if (response.body.status) {
                    store.commit("posts", response.body.data);
                }
            });
        },


    }

}

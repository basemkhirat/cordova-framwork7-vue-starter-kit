import Vue from 'vue';


export default {

    state: {
        user:  JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || null,
        expiration: localStorage.getItem("expiration") || 0
    },

    getters: {

        user: function (state) {
            return state.user;
        },

        token: function (state) {
            return state.token;
        },

        expiration: function (state) {
            return state.expiration;
        },

        auth: function (state) {

            if (!state.token || !state.expiration) {
                return false;
            }

            if (Date.now() > state.expiration) {
               /// alert("2");
                //return false;
            }

            return true;
        }
    },

    mutations: {

        login: function (state, body) {

            state.user = body.data.user;
            localStorage.setItem("user", JSON.stringify(body.data.user));

            state.token = body.data.token;
            localStorage.setItem("token", body.data.token);

            state.expiration = body.data.expires;
            localStorage.setItem("expiration", body.data.expires);

        },

        logout: function (state) {

            state.user = {};
            localStorage.removeItem("user");

            state.token = null;
            localStorage.removeItem("token");

            state.expiration = 0;
            localStorage.removeItem("expiration");

        }

    },

    actions: {

        login: function (store, user) {

            const params = {
                email: user.email,
                password: user.password,
            };

            return Vue.http.post("auth", params).then(function (response) {
                if(response.body.status) {
                    store.commit("login", response.body);
                }
            });
        },

        register: function (store, user) {

            const params = {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
                repassword: user.repassword,
                username: user.email.split("@")[0]
            };

            return Vue.http.post("user", params).then(function (response) {
                if(response.body.status){
                    store.commit("login", response.body);
                }
            });
        },


        logout: function () {
            console.log(Vue.$f7);
        }

    }

}

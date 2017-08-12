export default function (Vue) {

    Vue.auth = {

        /**
         * get stored token
         * @returns {null}
         */
        getToken() {
            let token = localStorage.getItem("token");
            let expiration = parseInt(localStorage.getItem("expiration"));

            if (!token || !expiration) {
                return null;
            }

            //if (Date.now() > expiration) {
            //    return null;
            //}

            return token;
        },

        /**
         * set token to localStorage
         * @param token
         * @param expiration
         */
        setToken(token, expiration) {
            localStorage.setItem("token", token);
            localStorage.setItem("expiration", expiration);
        },

        /**
         * destory token
         */
        destroyToken() {
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
        },

        /**
         * check user
         * @returns {boolean}
         */
        check() {

            if (this.getToken()) {
                return true;
            }

            return false;
        }

    };

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get () {
                return Vue.auth
            }
        }
    })

}

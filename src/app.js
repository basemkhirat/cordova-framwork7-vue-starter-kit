
export default function (Vue) {

    Vue.app = {

        t: function (key) {
            return "aaaaa";
        }

    };

    Object.defineProperties(Vue.prototype, {
        $app: {
            get () {
                return Vue.app
            }
        }
    })

}

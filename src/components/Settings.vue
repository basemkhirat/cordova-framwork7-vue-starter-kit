<template>

    <div class="page" data-page="settings">

        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link icon-only" @click="$router.back()">
                        <i class="icon f7-icons" v-if="$store.getters.locale == 'en'">arrow-left</i>
                        <i class="icon f7-icons" v-if="$store.getters.locale == 'ar'">arrow-right</i>
                    </a>
                </div>
                <div class="center">
                    {{ $app.trans("settings") }}
                </div>
                <div class="right"></div>
            </div>
        </div>

        <div class="page-content">
            <div class="content-block">

                <div class="content-block-title">{{ $app.trans("general_settings") }}</div>

                <div class="list-block">

                    <ul>
                        <li>
                            <a href="#" class="item-link smart-select" data-open-in="picker"
                               :data-back-text="$app.trans('back')">

                                <select v-model="$store.getters.locale" @change="setLocale($event.target.value)">
                                    <option value="en" selected>English</option>
                                    <option value="ar">Arabic</option>
                                </select>

                                <div class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title">{{ $app.trans("language") }}</div>
                                    </div>
                                </div>

                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    </div>


</template>


<script>

    export default {


        methods: {

            onF7Init: function () {


                console.log(this.$app);

                console.log("Settings init")
            },

            setLocale(locale) {

                const self = this;

                self.$f7.showIndicator();

                setTimeout(function () {
                    self.$f7.hideIndicator();
                    self.$store.commit("locale", locale);


                    self.$app.route("/");

                    //self.$f7.mainView.router.reloadPage("/");

                }, 3000);
            },

            trans: function (key) {
                return this.$app.trans(key, this.$store.getters.locale);
            }


        }

    }

</script>

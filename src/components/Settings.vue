<template>

    <div class="page" data-page="settings">

        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link icon-only" @click="$app.router.back()">
                        <i class="icon f7-icons" v-if="$app.locale() == 'en'">arrow-left</i>
                        <i class="icon f7-icons" v-if="$app.locale() == 'ar'">arrow-right</i>
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
                               :data-back-text="$app.trans('back')" data-back-on-select="true">

                                <select v-model="locale" @change="setLocale($event.target.value)">
                                    <option value="en" :selected="locale == 'en'">English</option>
                                    <option value="ar" :selected="locale == 'ar'">Arabic</option>
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

        <div class="toolbar toolbar-bottom toolbar-fixed">
            <div class="toolbar-inner">
                <a href="#" class="link">1</a>
                <a href="#" class="link">2</a>
            </div>
        </div>

    </div>

</template>


<script>

    export default {

        computed:  {

            locale: {

                get : function () {
                    return this.$app.locale()
                },

                set: function (locale) {
                    this.$store.commit("locale", locale)
                }
            }

        },


        methods: {

            onF7Init: function () {

            },

            setLocale(locale) {

                const self = this;

                self.$f7.showIndicator();

                setTimeout(function () {
                    self.$f7.hideIndicator();
                    self.$store.commit("locale", locale);
                    self.$app.router.load("/");
                }, 3000);
            },

            trans: function (key) {
                return this.$app.trans(key, this.$store.getters.locale);
            }


        }

    }

</script>

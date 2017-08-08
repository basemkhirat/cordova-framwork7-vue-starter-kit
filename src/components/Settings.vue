<template>

    <div class="page" data-page="settings">

        <div class="navbar" v-if="$theme.ios">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link icon-only" @click="$router.back()">
                        <i class="icon f7-icons" v-if="$store.getters.locale == 'en'">arrow-left</i>
                        <i class="icon f7-icons" v-if="$store.getters.locale == 'ar'">arrow-right</i>
                    </a>
                </div>
                <div class="center">
                    {{ $t("settings") }}
                </div>
                <div class="right"></div>
            </div>
        </div>

        <div class="navbar" v-if="$theme.material">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link icon-only" @click="$router.back()">
                        <i class="icon f7-icons" v-if="locale == 'en'">arrow-left</i>
                        <i class="icon f7-icons" v-if="locale == 'ar'">arrow-right</i>
                    </a>
                </div>
                <div class="center">
                    {{ $t("settings") }}
                </div>
                <div class="right"></div>
            </div>
        </div>

        <div class="page-content">
            <div class="content-block">

                <div class="content-block-title">{{ $t("general_settings") }}</div>

                <div class="list-block">

                    <ul>
                        <li>
                            <a href="#" class="item-link smart-select" data-open-in="picker"
                               :data-back-text="$t('back')">

                                <select v-model="locale" @change="setLocale($event.target.value)">
                                    <option value="en" selected>English</option>
                                    <option value="ar">Arabic</option>
                                </select>

                                <div class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title">{{ $t("language") }}</div>
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

        data: function () {

            return {
                locale: this.$store.getters.locale
            }

        },

        methods: {

            onF7Init: function () {
                console.log("Settings init")
            },

            setLocale(locale) {

                const self = this;

                self.$f7.showIndicator();

                setTimeout(function () {
                    self.$f7.hideIndicator();
                    self.$store.commit("locale", locale);

                    window.location.reload();

                }, 3000);
            },


        }

    }

</script>

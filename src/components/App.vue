<template>

    <div id="app">

        <!-- Status Bar Overlay -->
        <div class="statusbar-overlay"></div>

        <!-- Panels Overlay -->
        <div class="panel-overlay"></div>

        <!-- Main App -->

        <f7-views>
            <f7-view url='/' :init="true" :dynamic-navbar="true" navbar-through main>

                <navbar v-if="$theme.ios"></navbar>

                <f7-pages></f7-pages>

            </f7-view>
        </f7-views>

        <!-- Left panel -->

        <div class="panel panel-reveal navbar-fixed" :class="{'panel-left': $store.getters.locale == 'en', 'panel-right': $store.getters.locale == 'ar'}">

            <div class="navbar">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="#" class="link">Left Menu</a>
                    </div>
                </div>
            </div>

            <div class="page">

                <div class="page-content">

                    <div class="list-block">

                        <ul>

                            <li>
                                <a href="/home" class="item-link close-panel" data-view=".view-main">
                                    <div class="item-content">
                                        <div class="item-media"><i class="f7-icons">home</i></div>
                                        <div class="item-inner">
                                            <div class="item-title">
                                                {{ $t("news_feed") }}
                                            </div>
                                            <div class="item-after"><span class="badge">5</span></div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/settings" class="item-link close-panel" data-view=".view-main">
                                    <div class="item-content">
                                        <div class="item-media"><i class="f7-icons">settings</i></div>
                                        <div class="item-inner">
                                            <div class="item-title">
                                                {{ $t("settings") }}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li v-if="!$store.getters.auth">
                                <a href="/login" class="item-link close-panel" data-view=".view-main">
                                    <div class="item-content">
                                        <div class="item-media"><i class="f7-icons">person</i></div>
                                        <div class="item-inner">
                                            <div class="item-title">
                                                {{ $t("login") }}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li v-if="$store.getters.auth">
                                <a href="/logout" class="item-link close-panel" @click="$store.commit('logout')">
                                    <div class="item-content">
                                        <div class="item-media"><i class="f7-icons">person</i></div>
                                        <div class="item-inner">
                                            <div class="item-title">
                                                {{ $t("logout") }}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

        <!-- popup -->

        <div class="popup tablet-fullscreen navbar-fixed" id="popup">

            <div class="navbar">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="#" class="link">Popup</a>
                    </div>

                    <div class="right close-popup">
                        <a href="#" class="link close-popup">
                            {{ $t("close") }}
                        </a>
                    </div>
                </div>
            </div>

            <div class="page">

                <div class="page-content">

                    <div class="content-block">
                        test
                    </div>

                </div>

            </div>


        </div>


    </div>
</template>


<script>

    import Home from './Home.vue';

    export default {

        methods: {

            onF7Init: function () {

                console.log("App init");

                const base = this;

                document.addEventListener("offline", function () {
                    base.$f7.alert("You are offline");
                }, false);

            }

        },

        components: {
            navbar: require("./Navbar.vue")
        }

    }

</script>

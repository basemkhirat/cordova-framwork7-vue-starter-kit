<template>

    <div class="page" data-page="home">

        <navbar></navbar>

        <div class="page-content">
            <div class="content-block">
                <p>
                    <a class="button button-fill open-popup" data-popup="#popup">{{ $app.trans("open_popup") }}</a>
                </p>
                <p>
                    <a class="button button-fill" href="/settings">{{ $app.trans("settings") }}</a>
                </p>

                {{ $app.auth.user("email") }}
                {{ $app.direction() }}
                {{ $app.locale() }}

                <p v-if="$app.auth.check()"> You are logged in</p>

                <p v-for="(value,key) in this.user">
                    {{ key }} :  {{ value }}
                </p>

            </div>
        </div>

        <div class="toolbar toolbar-bottom toolbar-fixed">
            <div class="toolbar-inner">
                <a href="#" class="link">1</a>
                <a href="#" class="link">2</a>
                <a href="#" class="link">3</a>
                <a href="#" class="link">4</a>
            </div>
        </div>

        <!-- Links popover -->
        <div class="popover popover-user popover-on-bottom">
            <div class="popover-angle"></div>
            <div class="popover-inner">
                <div class="list-block">
                    <ul>
                        <li><a href="#" class="list-button item-link">{{ $app.trans("profile") }}</a></li>
                        <li><a href="#" class="list-button close-popover item-link"
                               @click="logout">{{ $app.trans("logout") }}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>


<script>

    import Vue from 'vue'

    export default {

        computed: {
            user: function () {
                return this.$app.auth.user();
            }
        },

        methods: {

            onF7Init: function () {

                console.log("Home init");

                const base = this;

                // console.log(base.$device);

                // console.log(base.$$);

                console.log(base.$theme);

                console.log(base.$f7);

                Vue.cordova.on('deviceready', function () {

                    // navigator.vibrate(2000);

                    navigator.geolocation.getCurrentPosition(function (position) {
                        /* base.$f7.alert('Latitude: ' + position.coords.latitude + '\n' +
                            'Longitude: ' + position.coords.longitude + '\n' +
                            'Altitude: ' + position.coords.altitude + '\n' +
                            'Accuracy: ' + position.coords.accuracy + '\n' +
                            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                            'Heading: ' + position.coords.heading + '\n' +
                            'Speed: ' + position.coords.speed + '\n' +
                            'Timestamp: ' + position.timestamp + '\n'); */
                    }, function (error) {
                        // base.$f7.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
                    });

                    /*base.$f7.addNotification({
                        title: 'Cordova',
                        message: 'Device is ready !',
                        button: {
                            text: 'Close Me',
                            color: 'lightgreen'
                        },
                        onClose: function () {
                            base.$f7.alert('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
                        }
                    });*/

                });

            },

            logout: function () {

                const self = this;

                self.$f7.showIndicator();

                self.$store.commit('logout');

                self.$f7.addNotification({
                    title: self.$app.trans('logout'),
                    message: self.$app.trans('logout_success'),
                    hold: 2500
                });

                setTimeout(function () {
                    self.$f7.hideIndicator();
                    self.$f7.mainView.router.reloadPage("/");
                }, 3000);

            }

        },

        components: {
            navbar: require("./Navbar.vue")
        }

    }

</script>

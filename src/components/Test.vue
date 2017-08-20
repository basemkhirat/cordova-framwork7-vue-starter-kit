<template>

    <div class="page  theme-green" data-page="home" data-view=".another-view">

        <navbar></navbar>

        <div class="page-content pull-to-refresh-content" >

            <div class="pull-to-refresh-layer">
                <div class="preloader"></div>
                <div class="pull-to-refresh-arrow"></div>
            </div>

            <div class="content-block">
                <p>
                   dsfdsafsdafd
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

    </div>

</template>


<script>

    import Vue from 'vue'

    export default {

        mounted: function () {

            console.log("home");

            /*const self = this;

            self.$app.on("cordova", function (app) {
                app.f7.alert("cordova loaded");
            });

            self.$app.load(function (app) {

                navigator.geolocation.getCurrentPosition(function (position) {
                    app.f7.alert('Latitude: ' + position.coords.latitude + '\n' +
                        'Longitude: ' + position.coords.longitude + '\n' +
                        'Altitude: ' + position.coords.altitude + '\n' +
                        'Accuracy: ' + position.coords.accuracy + '\n' +
                        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                        'Heading: ' + position.coords.heading + '\n' +
                        'Speed: ' + position.coords.speed + '\n' +
                        'Timestamp: ' + position.timestamp + '\n');
                }, function (error) {
                    app.f7.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
                });

                app.f7.addNotification({
                    title: 'Cordova',
                    message: 'Device is ready !',
                    button: {
                        text: 'Close Me',
                        color: 'lightgreen'
                    },
                    onClose: function () {
                        app.f7.alert('Device : ' + app.cordova.device.manufacturer + ' ' + app.cordova.device.platform + ' ' + app.cordova.device.version)
                    }
                });

                app.f7.alert("hhahahah");


            });*/
        },


        methods: {

            onF7Init: function () {


            },

        },

        components: {
            navbar: require("./partials/Navbar.vue")
        }

    }

</script>

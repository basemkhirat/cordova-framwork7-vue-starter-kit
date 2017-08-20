<template>

    <div id="app">

        <!-- status Bar Overlay -->

        <div class="statusbar-overlay"></div>

        <!-- panels Overlay -->

        <div class="panel-overlay"></div>

        <!-- main App -->

        <div class="views">
            <f7-view url="/" :dynamic-navbar="true" navbar-through main>
                <navbar v-if="$app.isIOS()"></navbar>
                <f7-pages></f7-pages>
            </f7-view>
        </div>

        <!-- Left panel -->

       <panel></panel>

        <!-- user popover -->

        <popover></popover>

        <!-- popup -->

        <div class="popup tablet-fullscreen navbar-fixed" id="popup">

            <div class="navbar">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="#" class="link">{{ $app.trans("popup") }}</a>
                    </div>

                    <div class="right close-popup">
                        <a href="#" class="link close-popup">
                            {{ $app.trans("close") }}
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

    export default {


        mounted: function () {
            console.log("home");
        },

        methods: {
            onF7Init: function () {}
        },

        components: {
            navbar: require("./partials/Navbar.vue"),
            panel: require("./partials/Panel.vue"),
            popover: require("./partials/Popover.vue")
        }

    }

</script>



<template>

    <div class="page no-navbar" data-page="login">

        <!-- page-content has additional login-screen content -->

        <div class="page-content login-screen-content">

            <div class="login-screen-title">

                <a href="#home">{{ $app.trans("name") }}</a>

            </div>

            <!-- Login form -->

            <form @submit.prevent="login">

                <div class="list-block">

                    <ul>

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">person</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $app.trans('email') }}</div>
                                    <div class="item-input">
                                        <input type="text" autocomplete="off" name="email" v-validate="'required|email'"
                                               v-model="user.email" :placeholder="$app.trans('email')">
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">lock</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $app.trans('password') }}</div>
                                    <div class="item-input">
                                        <input type="password" autocomplete="off" name="password"
                                               v-validate="'required|min:10'"
                                               v-model="user.password" :placeholder="$app.trans('password')">
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <f7-block>
                        <button style="width: 100%" type="submit" :disabled="submitted"
                                class="button button-big button-fill"
                                color="blue">{{ $app.trans('login') }}
                        </button>

                        <br/>

                        <a href="/register" class="button button-big">{{ $app.trans('register_new_account') }}</a>
                    </f7-block>

                </div>

            </form>

        </div>

    </div>

</template>


<script>

    export default {


        data: function () {
            return {
                user: {
                    email: "www@gmail.com",
                    password: "wwwwwwwwww",
                },
                submitted: false
            }
        },

        methods: {

            onF7Init: function () {

            },

            login: function () {

                const self = this;

                self.$f7.showPreloader(this.$app.trans("please_wait"));

                self.submitted = true;

                self.$validator.validateAll().then(function (valid) {

                    if (valid) {

                        self.$store.dispatch("login", self.user).then(function (response) {

                            // 200 ok response

                            self.$f7.addNotification({
                                title: self.$app.trans('login'),
                                message: self.$app.trans('login_success'),
                                hold: 2500
                            });

                            self.$app.router.load("/");

                        }, function (response) {

                            // other responses

                            self.$f7.addNotification({
                                title: self.$app.trans('login'),
                                message: response.body.data ? response.body.data : self.$app.trans("connection_error"),
                                hold: 8000
                            });

                        }).then(function (response) {
                            self.submitted = false;
                            self.$f7.hidePreloader();
                        });

                    } else {

                        self.$validator.errors.items.reverse().forEach(function (error) {
                            self.$f7.addNotification({
                                title: self.$app.trans('login'),
                                message: error.msg,
                                hold: 8000
                            });
                        });

                        self.submitted = false;
                        self.$f7.hidePreloader();
                    }


                });
            }

        }

    }

</script>

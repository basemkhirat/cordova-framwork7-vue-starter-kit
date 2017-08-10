<template>

    <div class="page no-navbar" data-page="login">

        <!-- page-content has additional login-screen content -->

        <div class="page-content login-screen-content">

            <div class="login-screen-title">

                <a href="#home">{{ $t("name") }}</a>

            </div>

            <!-- Login form -->

            <form @submit.prevent="login">

                <div class="list-block">

                    <ul>

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">person</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $t('email') }}</div>
                                    <div class="item-input">
                                        <input type="text" name="email" v-validate="'required|email'"
                                               v-model="user.email" :placeholder="$t('email')">
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">lock</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $t('password') }}</div>
                                    <div class="item-input">
                                        <input type="password" name="password" v-validate="'required|min:10'"
                                               v-model="user.password" :placeholder="$t('password')">
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <f7-block>
                        <button style="width: 100%" type="submit" :disabled="submitted"
                                class="button button-big button-fill"
                                color="blue">{{ $t('login') }}
                        </button>

                        <br/>

                        <a href="/register" class="button button-big">{{ $t('register_new_account') }}</a>
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
                    email: "ahmednour@gmail.com",
                    password: "qwertyuiop",
                },
                submitted: false
            }
        },

        methods: {

            onF7Init: function () {
                console.log("Login init")
            },

            login: function () {

                const self = this;

                self.$f7.showIndicator();

                self.submitted = true;

                self.$validator.validateAll(this.user).then(function (valid) {

                    if (valid) {

                        self.$store.dispatch("login", self.user).then(function (response) {

                            // 200 ok response

                            self.$f7.addNotification({
                                title: self.$t('login'),
                                message: self.$t('login_success'),
                                hold: 2500
                            });


                            self.$f7.showIndicator();

                            setTimeout(function () {
                                self.$f7.hideIndicator();
                                window.location.reload();
                            }, 3000);

                            //return self.$f7.mainView.router.loadPage({url: "/"});

                        }, function (response) {

                            // other responses

                            self.$f7.addNotification({
                                title: self.$t('login'),
                                message: response.body.data ? response.body.data : self.$t("connection_error"),
                                hold: 8000
                            });

                        }).then(function (response) {
                            self.submitted = false;
                            self.$f7.hideIndicator();
                        });

                    } else {

                        self.$validator.errors.items.reverse().forEach(function (error) {
                            self.$f7.addNotification({
                                title: self.$t('login'),
                                message: error.msg,
                                hold: 8000
                            });
                        });

                        self.submitted = false;
                        self.$f7.hideIndicator();
                    }


                });
            }

        }

    }

</script>

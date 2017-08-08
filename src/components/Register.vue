<template>

    <div class="page no-navbar" data-page="register">

        <!-- page-content has additional login-screen content -->

        <div class="page-content login-screen-content">

            <div class="login-screen-title">

                <a href="#home">{{ $t("name") }}</a>

            </div>

            <!-- Login form -->

            <form @submit.prevent="register">

                <div class="list-block">

                    <ul>
                        <!-- Name -->

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">person</i></div>
                                <div class="item-inner">

                                    <f7-grid>

                                        <f7-col>
                                            <input name="first_name" v-validate="'required|alpha_num|min:2|max:20'"
                                                   v-model="user.first_name"
                                                   type="text" :placeholder="$t('first_name')">
                                        </f7-col>

                                        <f7-col>
                                            <input name="last_name" v-validate="'required|alpha_num|min:2|max:20'"
                                                   v-model="user.last_name"
                                                   type="text" :placeholder="$t('last_name')">
                                        </f7-col>

                                    </f7-grid>


                                </div>
                            </div>
                        </li>

                        <!-- Email -->

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">person</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $t('email') }}</div>
                                    <div class="item-input">
                                        <input name="email" v-validate="'required|email'" v-model="user.email"
                                               type="text"
                                               :placeholder="$t('email')">
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Password -->

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">lock</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $t('password') }}</div>
                                    <div class="item-input">
                                        <input name="password" v-validate="'required|min:10'" v-model="user.password"
                                               type="password" :placeholder="$t('password')">
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Confirm Password -->

                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="icon f7-icons">lock</i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{ $t('confirm_password') }}</div>
                                    <div class="item-input">
                                        <input name="repassword" v-validate="'required|confirmed:password|min:10'"
                                               v-model="user.repassword"
                                               type="password" :placeholder="$t('confirm_password')">
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <f7-block>

                        <button style="width: 100%" type="submit"
                                class="button button-big button-fill"
                                color="blue"
                                :disabled="submitted">{{ $t('register') }}
                        </button>

                        <br/>

                        <a href="/login" class="button button-big">{{ $t('have_an_account') }}</a>

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
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    repassword: ""
                },
                submitted: false
            }
        },

        methods: {

            onF7Init: function () {
                console.log("Login page init")
            },

            register: function () {

                const self = this;

                self.$f7.showIndicator();

                self.submitted = true;

                self.$validator.validateAll(this.user).then(function (valid) {

                    if (valid) {

                        self.$store.dispatch("register", self.user).then(function () {

                            // 200 ok response

                            self.$f7.addNotification({
                                title: self.$t('register'),
                                message: self.$t('register_success'),
                                hold: 2500
                            });


                            setTimeout(function () {
                                window.location.reload();
                            }, 3000);


                        }, function (response) {

                            // other responses

                            self.$f7.addNotification({
                                title: self.$t('register'),
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
                                title: self.$t('register'),
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

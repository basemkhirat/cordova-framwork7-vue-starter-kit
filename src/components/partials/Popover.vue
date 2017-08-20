<template>

    <div class="popover popover-user popover-on-bottom">
        <div class="popover-angle"></div>
        <div class="popover-inner">
            <div class="list-block">
                <ul>
                    <li v-if="!$app.auth.check()" ><a href="/login" class="list-button close-popover item-link">{{ $app.trans("login") }}</a></li>
                    <li v-if="$app.auth.check()"><a href="#" class="list-button close-popover item-link">{{ $app.trans("profile") }}</a></li>
                    <li v-if="$app.auth.check()"><a href="#" class="list-button close-popover item-link"
                                                    @click="$app.auth.logout()">{{ $app.trans("logout") }}</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

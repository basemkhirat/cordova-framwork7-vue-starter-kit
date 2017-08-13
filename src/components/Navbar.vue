<template>

    <div class="navbar">
        <div class="navbar-inner">
            <div class="left">
                <a href="#" class="link icon-only open-panel"
                   :data-panel="{'left': $store.getters.locale == 'en', 'right': $store.getters.locale == 'ar'}">
                    <i class="icon icon-bars"></i>
                </a>
            </div>
            <div class="center">{{ $t("name") }}</div>
            <div class="right">
                <a style="text-transform:capitalize" v-if="$store.getters.auth" href="#"
                   data-popover=".popover-user"
                   class="link icon-only open-popover">
                    {{ $store.getters.user.first_name }} &nbsp;
                    <i class="f7-icons">person</i>
                </a>
            </div>
        </div>
    </div>

</template>


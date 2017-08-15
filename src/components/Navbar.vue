<template>

    <div class="navbar">
        <div class="navbar-inner">
            <div class="left">
                <a href="#" class="link icon-only open-panel"
                   :data-panel="{'left': $app.isLTR(), 'right': $app.isRTL()}">
                    <i class="icon icon-bars"></i>
                </a>
            </div>
            <div class="center">{{ $app.trans("name") }}</div>
            <div class="right">
                <a style="text-transform:capitalize" v-if="$app.auth.check()" href="#"
                   data-popover=".popover-user"
                   class="link icon-only open-popover">
                    {{ $app.auth.user("first_name") }} &nbsp;
                    <i class="f7-icons">person</i>
                </a>
            </div>
        </div>
    </div>

</template>


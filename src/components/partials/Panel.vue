<template>

    <div class="panel panel-reveal navbar-fixed layout-dark" :class="{'panel-left': $app.isLTR(), 'panel-right': $app.isRTL()}">

        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link">{{ $app.trans("left_menu") }}</a>
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
                                            {{ $app.trans("news_feed") }}
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
                                            {{ $app.trans("settings") }}
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

</template>

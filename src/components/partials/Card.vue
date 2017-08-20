<template>

    <div class="card demo-card-header-pic ">
        <div data-background="http://lorempixel.com/500/500/people/10" valign="bottom"
             class="card-header color-white no-border lazy lazy-fadein">
            {{ post.title }}
        </div>
        <div class="card-content">
            <div class="card-content-inner">
                <p class="color-gray">{{ post.createdAt }}</p>
                <p>{{ post.content }}</p>
            </div>
        </div>
        <div class="card-footer">
            <a href="#" class="link" @click="like(post)">
                <i class="f7-icons">{{ isLiked ? 'heart_fill' : 'heart' }}</i>
            </a>

            <a href="#" class="link" @click="save(post)">
                <i class="f7-icons">{{ isSaved ? 'bookmark_fill' : 'bookmark' }}</i>
            </a>
        </div>
    </div>


</template>


<script>

    export default {

        props: [
            'post'
        ],

        data: function () {
            return {
                isLiked: this.post.isLiked,
                isSaved: this.post.isSaved
            }
        },

        methods: {

            like: function () {
                this.isLiked = !this.isLiked;
            },

            save: function (post) {
                this.isSaved = !this.isSaved;
            },

        }
    }

</script>

<style scoped>

    .card {
        overflow: hidden;
        border-radius: 5px;
    }

    .demo-card-header-pic .card-header {
        height: 50vw;
        background-size: cover;
        background-position: center;
        background: #cdcdcd;
        text-shadow: 2px 1px 4px #171717;
    }

    .card-footer:before {
        background-color: transparent;
    }

    .f7-icons {
        line-height: 36px;
    }

</style>

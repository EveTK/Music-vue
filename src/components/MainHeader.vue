<template>
    <div class="main-header">
        <div class="title text-weight-7 text-center  text-primary text-lg">
            {{ title }}
        </div>

        <div class="nav-list">
            <ul class="d-flex jc-around pt-3 text-md text-grey2">
                <li
                    v-for="item of navList"
                    :key="item.name"
                    :class="{ 'nav-active': item.path === $route.path }"
                    @click="navClick(item.path)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Function Music"
        }
    },
    data() {
        return {
            navList: [
                {path: '/recommend', name: '推荐'},
                {path: '/singer', name: '歌手'},
                {path: '/rank', name: '排行'},
                {path: '/search', name: '搜索'},
            ]
        }
    },
    methods: {
        navClick(path) {
            this.$emit('nav-click', path);
        }
    }
}
</script>

<style>
.text-center {
    text-align: center;
}
.text-weight-7 {
    font-weight: 700;
}
</style>
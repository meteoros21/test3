<template>
    <div id="post-list-page" :key="$route.fullPath">
        <h2>이것은 PostList 영역입니다.</h2>
        <SearchBox v-on:search="searchPost"/>
        <PostListTable/>
        <Paginator v-bind:post-count="postCount" :cur-page="page" :key="$route.fullPath"/>
    </div>
</template>

<script>
    import PostListTable from "../components/PostListTable";
    import Paginator from "../components/Paginator";
    import SearchBox from "../components/SearchBox";

    let posts = [
        {no: 1, title: 'Hello World', writer: 'Hong Kildong', regDate: '2019-01-01'},
        {no: 2, title: 'Testing Now', writer: 'Kim Manduk', regDate: '2019-01-02'}
    ]
    let postCount = 400
    let curPage = 1;

    export default {
        name: "PostList",
        components: {SearchBox, Paginator, PostListTable },
        data: function () {
            alert('data');
            return {
                posts: posts,
                postCount: postCount,
                page: parseInt(this.$router.currentRoute.params['page'])
            }
        },
        methods: {
            searchPost: function (keyword) {
                alert(keyword);
            }
        },

        updated() {
            Paginator.curPage = parseInt(this.$router.currentRoute.params['page']);
            curPage = parseInt(this.$router.currentRoute.params['page'])
            alert(curPage);
        },
        created() {
            // curPage = this.$router.currentRoute.params['page'];
            curPage = parseInt(this.$router.currentRoute.params['page'])
            console.log(this.$router.currentRoute.params['page']);
            // alert(curPage);
        }
    }
</script>

<style scoped>
    #post-list-page {
        padding: 40px;
    }
</style>
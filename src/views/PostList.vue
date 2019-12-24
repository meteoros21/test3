<template>
    <div id="post-list-page" :key="$route.fullPath">
        <h2>이것은 PostList 영역입니다.</h2>
        <SearchBox v-on:search="searchPost" v-bind:keyword="keyword"/>
        <PostListTable v-bind:posts="posts"/>
        <Paginator v-bind:post-count="postCount" :cur-page="curPage" />
    </div>
</template>

<script>
    import PostListTable from "../components/PostListTable";
    import Paginator from "../components/Paginator";
    import SearchBox from "../components/SearchBox";
    import PostApi from "../api/PostApi";

    let data = {
        postCount: 400,
        curPage: 1,
        keyword: '',
        posts: [
            {no: 1, title: 'Hello World', writer: 'Hong Kildong', regDate: '2019-01-01'},
            {no: 2, title: 'Testing Now', writer: 'Kim Manduk', regDate: '2019-01-02'}
        ]
    }

    export default {
        name: "PostList",
        components: {SearchBox, Paginator, PostListTable },
        data: function () {
            return data
        },
        methods: {
            searchPost: function (keyword) {
                data.curPage = 1;
                data.keyword = keyword;
                this.loadPosts()
            },
            setPage: function(page) {
                if (page !== this.curPage) {
                    this.curPage = page
                    this.loadPosts()
                }
            },
            loadPosts: function () {
                let data2 = PostApi.getPostList(this, this.curPage, this.keyword)
                data.posts = data2.posts
                data.postCount = data2.postCount
                data.curPage = data2.curPage
            }
        },
        created() {
            this.curPage = parseInt(this.$router.currentRoute.params['page']);
            this.loadPosts();
        },
        updated() {
            let curPage = parseInt(this.$router.currentRoute.params['page']);
            this.setPage(curPage);
        }
    }
</script>

<style scoped>
    #post-list-page {
        padding: 20px 40px;
    }
</style>
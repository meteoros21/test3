<template>
    <div id="post-list-page" style="height: 100%" class="table">
        <div class="row">
            <div class="col-md-12">
                <h2>이것은 PostList 영역입니다.</h2>
            </div>
        </div>
        <div class="row" style="height: 92%">
            <div class="col-md-3" style="vertical-align: top; padding: 5px; height: 100%">
                <TreeView />
            </div>
            <div class="col-md-9" style="width: 70%; padding: 5px">
                <SearchBox v-bind:keyword="keyword" v-on:search="searchPost" />
                <PostListTable v-bind:posts="posts"/>
                <Paginator v-bind:post-count="postCount" v-bind:cur-page="curPage" v-on:changed="setPage" />
            </div>
        </div>
    </div>
</template>

<script>
    import TreeView from "../components/TreeView";
    import PostListTable from "../components/PostListTable";
    import Paginator from "../components/Paginator";
    import SearchBox from "../components/SearchBox";
    import PostApi from "../api/PostApi";

    export default {
        name: "PostList",
        components: {TreeView, SearchBox, Paginator, PostListTable },
        data: function () {
            // return data
            return {
                postCount: 0,
                keyword: '',
                page: 1,
                posts: []
            }
        },
        methods: {
            searchPost: function (keyword) {
                this.page = 1
                this.keyword = keyword

                // 페이지와 키워드를 URL 파라미터에 저장한다.
                // 이렇게 하면 새로 고침이 눌려져도 상태를 유지할 수 있다.
                this.$router.push({name: 'postList', query: {page: '1', keyword: keyword}})

                // 리스트를 다시 읽어 온다.
                this.loadPosts()
                //this.$forceUpdate()
                //window.location.reload()
            },
            setPage: function(page) {
                this.page = page

                // 페이지와 키워드를 URL 파라미터에 저장한다.
                // 이렇게 하면 새로 고침이 눌려져도 상태를 유지할 수 있다.
                this.$router.push({name: 'postList', query: {page: page, keyword: this.keyword}})

                // 리스트를 다시 읽어 온다.
                this.loadPosts()
                // this.$forceUpdate()
                //window.location.reload()
            },
            loadPosts: function () {
                let result = PostApi.getPostList(this, this.page, this.keyword)
                this.posts = result.posts
                this.postCount = result.postCount
            }
        },
        computed: {
            curPage: function () {
                return this.page;
            }
        },
        created() {
            // 새로고침이 시도되어도 파라미터에 저장된 데이터로 상태를 유지할 수 있다.
            let queryString = this.$router.currentRoute.query['page'];
            queryString = (typeof queryString == 'undefined' || queryString == '') ? '1' : queryString;

            this.page = parseInt(queryString)
            this.keyword = this.$router.currentRoute.query['keyword']

            if (isNaN(this.page))
                this.page = 1
            if (typeof this.keyword == 'undefined')
                this.keyword = ''

            this.loadPosts();
        },
        updated() {
        }
    }
</script>

<style scoped>
    #post-list-page {
        padding: 20px 5px;
    }
</style>
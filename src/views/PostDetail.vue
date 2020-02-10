<template>
    <div id="post-detail">
        <h2>이것은 PostDetail 콤포넌트입니다.</h2>

        <div class="title">{{title}}</div>
        <div class="body" v-html="body"></div>
        <div style="float: right; width: auto; margin-top: 10px">
            <button v-on:click="editPost" type="button" class="btn btn-primary">수정</button>
            <button v-on:click="delPost" type="button" class="btn btn-danger">삭제</button>
            <button v-on:click="goBack" type="button" class="btn btn-outline-secondary">돌아가기</button>
        </div>
    </div>

</template>

<script>
    import PostApi from "../api/PostApi";
    let data = {
        title: '',
        body: '',
        writer: '',
        regDate: ''
    }
    export default {
        name: "PostDetail",
        computed: {
            post: function() {
                return data
            },
            title: function () {
                return data.title
            },
            body: function () {
                return data.body
            }
        },
        methods: {
            editPost: function () {
                this.$router.push('/post-edit/' + this.post.no)
            },
            delPost: function () {
                PostApi.deletePost(this.post.no);
                this.$router.replace('/post-list/1')
            },
            goBack: function () {
                this.$router.back();
            }
        },
        created() {
            let no = parseInt(this.$router.currentRoute.params['no']);
            data = PostApi.getPost(no);
        }
    }
</script>

<style scoped>
    #post-detail {
        padding: 20px 40px;
    }
    .title {
        width: 100%;
        text-align: left;
        padding: 5px 10px;
        border: 1px solid #cccccc;
    }
    .body {
        width: 100%;
        min-height: 300px;
        text-align: left;
        padding: 5px 10px;
        margin-top: 10px;
        border: 1px solid #cccccc;
    }
    button {
        margin: 0 4px;
    }
</style>
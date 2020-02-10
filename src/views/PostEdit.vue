<template>
    <div id="post-form">
        <h2>이것은 PostEdit 영역입니다.</h2>
        <form name="form-post">
            <input type="hidden" v-model="post.no">
            <table class="table-post-edit">
                <tr>
                    <td><input v-model="post.title" class="form-control" type="text" name="title" style="width: 100%"></td>
                </tr>
                <tr>
                    <td>
                        <textarea v-model="post.body" class="form-control" style="width: 100%; height: 300px"></textarea>
                    </td>
                </tr>
            </table>
        </form>
        <div style="float: right; width: auto">
            <button v-on:click="save" type="button" class="btn btn-primary" style="margin: 0 4px">저장하기</button>
            <button v-on:click="goBack" type="button" class="btn btn-info" style="margin: 0 4px">취소</button>
        </div>
    </div>

</template>

<script>
    import PostApi from "../api/PostApi";
    const $ = require('expose-loader?$!expose-loader?jQuery!jquery')
    window.$ = $

    let data = {
        post: {
            no: 0,
            title: '',
            body: '',
            writer: '김만득',
            regDate: '2020-01-01'
        }
    }

    export default {
        name: "PostEdit",
        data: function () {
            return data;
        },
        methods: {
            goBack: function () {
                this.$router.back();
            },
            save: function () {
                this.post.body = this.post.body.replace(/\n/gi, '<br>');

                if (this.post.no > 0)
                {
                    PostApi.updatePost(this.post);
                    this.$router.replace('/post-detail/' + this.post.no)
                }
                else
                {
                    PostApi.addPost(this.post);
                    this.$router.replace({name: 'postList', query: {page: '1'}})
                }
            }
        },
        created() {
            let no = parseInt(this.$router.currentRoute.params['no']);

            if (no > 0) {
                let post = $.extend({}, PostApi.getPost(no));
                post.body = post.body.replace(/<br>/gi, '\n');
                this.post = post;
            }
            else
            {
                this.post.no = 0;
                this.post.title = ''
                this.post.body = ''
            }
        }
    }
</script>

<style scoped>
    #post-form {
        padding: 20px 40px;
    }
    .table-post-edit {
        width: 100%;
        font-size: 13px;
    }
    .table-post-edit td, th {
        padding: 5px 10px;
    }
</style>
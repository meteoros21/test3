<template>
    <div id="post-list">
        <table>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
            </thead>
            <tr v-for="post in posts" v-bind:key="post.no">
                <td>{{post.no}}</td>
                <td><router-link :to="{path: '/post-detail/' + post.no}">{{post.title}}</router-link></td>
                <td>{{post.writer}}</td>
                <td>{{post.regDate}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    // let posts = [
    //     {no: 1, title: 'Hello World', writer: 'Hong Kildong', regDate: '2019-01-01'},
    //     {no: 2, title: 'Testing Now', writer: 'Kim Manduk', regDate: '2019-01-02'}
    // ]

    export default {
        name: "PostListTable",
        props: {
            posts: {
                type: Array,
                default: () => []
            }
        },
        // data: function () {
        //     return {
        //         posts: posts
        //     }
        // }
    }
</script>

<style scoped>
    #post-list { padding: 20px 0 }
    table { border-collapse: collapse; border: 1px solid #dddddd; width: 100% }
    table td, th { border-collapse: collapse; border: 1px solid #dddddd; padding: 5px 10px }
    table th { background-color: #eeeeee }
</style>
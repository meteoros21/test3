<template>
    <div class="pagination">
        <span v-for="no in pageNos" v-bind:key="no">
            <button v-if="no === curPage" class="active" v-on:click="movePage(no)">{{no}}</button>
            <button v-else v-on:click="movePage(no)">{{no}}</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Paginator",
        props: {
            curPage: {
                type: Number,
                default: 1
            },
            postCount: {
                type: Number,
                default: 0
            },
            itemsPerPage: {
                type: Number,
                default: 10,
                required: false
            }
        },
        computed: {
            pageNos: function() {
                let pages = [];
                let s = this.startPage;
                let e = this.endPage;

                for (let i = s; i < e; i++)
                    pages.push(i);

                return pages;
            },
            startPage: function() {
                return 1 + Math.floor((this.curPage-1) / 10) * 10;
            },
            endPage: function() {
                let l1 = this.startPage + 10;
                let l2 = Math.floor((this.postCount) / this.itemsPerPage);
                return Math.min(l1, l2);
            }
        },
        methods: {
            movePage: function (page) {
                this.$router.push('/post-list/' + page)
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    span {margin: 0 10px}
    button { padding: 5px 8px}
    button.active { background-color: #3e82cf; color: white }
</style>
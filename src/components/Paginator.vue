<template>
    <div class="pagination">
        <button v-on:click ="movePage(1)">&lt;&lt;</button>
        <button v-on:click="movePage(prevPage)">&lt;</button>
        <span v-for="no in pageNos" v-bind:key="no">
            <button v-if="no === curPage" class="active" v-bind:data-page="no">{{no}}</button>
            <button v-else v-bind:data-page="no" v-on:click="movePage(no)">{{no}}</button>
        </span>
        <button v-on:click="movePage(nextPage)">&gt;</button>
        <button v-on:click="movePage(lastPage)">&gt;&gt;</button>
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
                let l2 = this.lastPage + 1;
                return Math.min(l1, l2);
            },
            lastPage: function () {
                return 1 + Math.floor((this.postCount - 1) / this.itemsPerPage);
            },
            prevPage: function () {
                return Math.max(1, this.startPage - 1);
            },
            nextPage: function () {
                return Math.min(this.endPage, this.lastPage);
            }
        },
        methods: {
            movePage: function (page) {
                // this.$router.push('/post-list/' + page)
                // this.EventBus.$emit('pageChanged', page)
                this.$emit('changed', page)
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    span {margin: 0}
    button { margin: 0 4px}
    button.active { background-color: #3e82cf; color: white }
    .pagination { width: 100%; text-align: center; display: block }
    .pagination button { font-family: 'Arial', Helvetica, Arial, sans-serif; min-width: 34px; min-height: 34px }
</style>
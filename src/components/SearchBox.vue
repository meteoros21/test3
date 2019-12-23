<template>
    <div id="search-box">
        <form @submit.prevent="searchPost">
            <input class="keyword" v-model="keyword">
            <button type="submit" class="button search">검색</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchBox",
        data: function() {
            return {
                keyword: ''
            }
        },
        methods: {
            searchPost: function () {
                this.$emit('search', this.keyword)
            }
        }
    }
</script>

<style scoped>
    #search-box {
        float: right;
        width: auto;
        margin-bottom: 8px;
        font-size: 13px;
    }
    #search-box .keyword {
        width: 120px;
        height: 2.5em;
        padding: 0.3em 0.5em;
        border-radius: 4px;
        border: 1px solid rgb(221,221,221);
        display: inline-block;
        box-sizing: border-box;
        margin-top: 1px;
        outline: none;
        font-size: 14px;
    }
    button {
        background: none;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    button.search {
        background-color: #f8f8f8;
        height: 2.6em;
        display: inline-block;
        box-sizing: border-box;
        padding: 0.3em 0.5em;
        outline: none;
        font-size: 13px;
    }
    button.search:hover {
        background-color: #3e82cf;
        color: white;
    }
</style>
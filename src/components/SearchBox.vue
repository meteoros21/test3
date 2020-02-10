<template>
    <form class="form-inline" @submit.prevent="searchPost">
        <div class="row" style="width: 100%; margin: 0">
            <div class="col-lg-6"></div>
            <div class="col-lg-6" style="padding: 0">
                <div class="input-group">
                    <!-- Search clear button -->
                    <input class="form-control py-2 border-right-0 border" type="search" v-model="myKeyword" v-on:search="keywordChanged">
                    <span class="input-group-append">
                        <button class="btn btn-outline-secondary border-left-0 border" type="submit"><i class="fa fa-search"></i></button>
                    </span>
                    <button v-on:click="writePost" type="button" class="btn btn-primary" style="margin-left: 2px">New Post</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    let data = {
        myKeyword: ''
    }

    export default {
        name: "SearchBox",
        data: function() {
            return data;
        },

        props: {
            keyword: {
                type: String,
                default: ''
            }
        },
        methods: {
            searchPost: function () {
                this.$emit('search', this.myKeyword)
            },
            writePost: function () {
                this.$router.push('/post-edit/0')
            },
            keywordChanged: function () {
                if (this.myKeyword == '')
                    this.searchPost()
            }
        },
        created() {
            this.myKeyword = this.keyword
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
    ::-ms-clear { display: none }
    /*#search-box .keyword {*/
    /*    width: 120px;*/
    /*    height: 2.5em;*/
    /*    padding: 0.3em 0.5em;*/
    /*    border-radius: 4px;*/
    /*    border: 1px solid rgb(221,221,221);*/
    /*    display: inline-block;*/
    /*    box-sizing: border-box;*/
    /*    margin-top: 1px;*/
    /*    outline: none;*/
    /*    font-size: 14px;*/
    /*}*/
    /*button {*/
    /*    background: none;*/
    /*    box-sizing: border-box;*/
    /*    border-radius: 5px;*/
    /*    border: 1px solid #ccc;*/
    /*    cursor: pointer;*/
    /*}*/
    /*button.search {*/
    /*    background-color: #f8f8f8;*/
    /*    height: 2.6em;*/
    /*    display: inline-block;*/
    /*    box-sizing: border-box;*/
    /*    padding: 0.3em 0.5em;*/
    /*    outline: none;*/
    /*    font-size: 13px;*/
    /*}*/
    button.search:hover {
        background-color: #3e82cf;
        color: white;
    }
    .form-control-clear {
        z-index: 10;
        pointer-events: auto;
        cursor: pointer;
    }
</style>
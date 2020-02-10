<template>
    <div class="top-menu-inner">
        <p class="text-white">Jett's Blog</p>
        <div class="my-top-nav">
            <ul class="list-inline nav nav-tabs" role="tablist">
                <li class="nav-item list-inline-item"><a class="active" href="#sitab" role="tab" data-toggle="tab">System Information</a></li>
                <li class="nav-item list-inline-item"><a href="#apitab" role="tab" data-toggle="tab">API List</a></li>
                <li class="nav-item list-inline-item"><a href="#sourcetab" role="tab" data-toggle="tab">Source</a></li>
                <li class="nav-item list-inline-item"><a href="#helptab" role="tab" data-toggle="tab">Help</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopMenu"
    }
</script>

<style scoped>
    .top-menu-inner {
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
        text-align: left;
    }
    .top-menu-inner p {
        font-size: 26px;
        font-weight: bold
    }
    .my-top-nav {
        position: absolute;
        right: 0;
        bottom: -1px;
        font-weight: bold;
    }
    .my-top-nav a {
        color: white;
        font-size: 14px;
        padding: 8px 10px;
        text-decoration: none;
        display: inline-block;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .my-top-nav a.active {
        color: black;
        background-color: white
    }

</style>
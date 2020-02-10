<template>
  <div id="app">
    <div class="header-section bg-dark">
      <div class="header-wrap">
        <top-menu/>
      </div>
    </div>
    <div class="body-section">
      <div class="body-wrap">
        <router-view/>
      </div>
    </div>
    <div class="footer-section">
      <div class="footer-wrap">

      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header-section {
  position: absolute;
  top: 0;
  height: 95px;
  width: 100%;
}
.body-section {
  position: absolute;
  top: 95px;
  bottom: 60px;
  width: 100%;
}
.footer-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #6c757d;
}
.header-wrap {
  width: 1000px;
  margin: 0 auto;
}
.body-wrap {
  width: 1000px;
  height: 100%;
  margin: 0 auto;
}
</style>
<script>
  import TopMenu from "./components/TopMenu";
  export default {
    components: {TopMenu}
  }
</script>
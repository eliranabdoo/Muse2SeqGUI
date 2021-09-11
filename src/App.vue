<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
    style="max-width: 10%; height: auto;"
  />
  <the-title msg="Muse2Seq"></the-title>
  <models-bar></models-bar>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheTitle from "./components/Title.vue";
import ModelsBar from "./components/ModelsBar.vue";

export default {
  name: "App",
  components: {
    TheTitle,
    ModelsBar,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

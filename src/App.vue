<template>
  <div id="app">
    <h />
    <NFItem class="pt-20" />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> 
    <router-view /> -->
  </div>
</template>

<script>
import h from "./components/header.vue";
import NFItem from "./components/NFItem.vue";
export default {
  name: "App",
  components: { h, NFItem },
};
</script>
<style></style>

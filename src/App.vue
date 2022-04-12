<template>
  <div id="app">
    <h />
    <NFItem class="pt-20" />
    <f />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
  </div>
</template>

<script>
import h from "./components/header.vue";
import NFItem from "./components/CreatePostComponent.vue";
import f from "./components/footer";

export default {
  name: "App",
  components: { h, NFItem, f },
};
</script>
<style></style>

<template>
  <div id="app">
    <h class="mb-10" />

    <LeftBar class="absolute" />

    <router-view />
  </div>
</template>

<script>
import h from "./components/header.vue";
import LeftBar from "./components/CreatePostComponent.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: { h, LeftBar, Footer },
};
</script>
<style></style>

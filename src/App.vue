<template>
  <div id="app">
    <h class="mb-10" />

    <leftBar class="absolute" />
    <rightBar class="mr-14 absolute" />
    <NFItem class="mt-10 mr-28" />

    <router-view />
  </div>
</template>

<script>
import h from "./components/header.vue";
import Statistical from "./components/Statistical.vue";
import NFItem from "./components/NFItem.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import f from "./components/footer.vue";
import rightBar from "./components/RightBar.vue";
export default {
  name: "App",
  components: { h, PostSTT, NFItem, f, rightBar },
};
</script>
<style></style>

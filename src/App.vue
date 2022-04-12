<template>
  <div id="app">
    <h class="mb-10" />
    <LeftBar class="absolute fixed"/>
    <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />
  </div>
</template>

<script>
import h from "./components/header.vue";
import NFItem from "./components/NFItem.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import LeftBar from "./components/LeftBar.vue";
export default {
  name: "App",
  components: { h, NFItem, PostSTT, LeftBar },
};
</script>
<style></style>

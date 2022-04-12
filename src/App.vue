<template>
  <div id="app">
    <h class="mb-10" />
    <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />
    <f class="mt-10" />
  </div>
</template>

<script>
import h from "./components/header.vue";
import NFItem from "./components/NFItem.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import f from "./components/footer.vue";
export default {
  name: "App",
  components: { h, NFItem, PostSTT, f },
};
</script>
<style></style>
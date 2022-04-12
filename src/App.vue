<template>
  <div id="app">
    <h class="mb-10" />
    <!-- <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" /> -->
    <Statistical />
    <f class="mt-10" />
  </div>
</template>

<script>
import h from "./components/header.vue";
import Statistical from "./components/Statistical.vue";
import NFItem from "./components/NFItem.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import f from "./components/footer.vue";
export default {
  name: "App",
  components: { h, NFItem, PostSTT, f, Statistical },
};
</script>
<style></style>

<template>
  <div id="app">
    <h class="mb-10" />
    <LeftBar class="absolute fixed" />
    <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />
    <h />
    <NFItem class="pt-20" />
    <f />
  </div>
</template>

<script>
import h from "./components/header.vue";
import NFItem from "./components/NFItem.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import LeftBar from "./components/LeftBar.vue";
export default {
  name: "App",
  components: { h, NFItem, PostSTT, LeftBar, f },
};
import f from "./components/footer.vue";
</script>
<style></style>

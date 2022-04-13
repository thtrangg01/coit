<template>
  <div id="app">
    <h class="mb-10" />
    <LeftBar class="absolute" />
    
    <Statistical />
    <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />

    <f class="mt-10" />
  </div>
</template>

<script>
import h from "./components/header.vue";
import Statistical from "./components/Statistical.vue";
import NFItem from "./components/NFItem.vue";
import LeftBar from "./components/LeftBar.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import f from "./components/footer.vue";
export default {
  name: "App",

  components: { h, NFItem, PostSTT, f, Statistical, LeftBar },
};
</script>
<style></style>

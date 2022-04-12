<template>
  <div id="app">
    <h class="mb-10" />
<<<<<<< tkhuyen
    <!-- <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" /> -->
    <Statistical />
=======
    <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />
>>>>>>> master
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
<<<<<<< tkhuyen
  components: { h, NFItem, PostSTT, f, Statistical },
=======
  components: { h, NFItem, PostSTT, f },
>>>>>>> master
};
</script>
<style></style>
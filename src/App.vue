<template>
  <div id="app">
    <Statistical />

    <f class="mt-10" />
  </div>
</template>

<script>
import Statistical from "./components/Statistical.vue";
import NFItem from "./components/NFItem.vue";
import PostSTT from "./components/CreatePostComponent.vue";
import f from "./components/footer.vue";
export default {
  name: "App",
  components: { NFItem, PostSTT, f, Statistical },
};
</script>
<style></style>

<template>
  <div>
    <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />
    <Footer class="mt-10" />
  </div>
</template>

<script>
import LeftBar from "@/components/LeftBar.vue";
import PostSTT from "@/components/CreatePostComponent.vue";
import NFItem from "@/components/NFItem.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "feedsview",
  components: { PostSTT, NFItem, Footer },
};
</script>

<style>

</style>

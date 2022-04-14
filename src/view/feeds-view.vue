<template>
  <div>
    <PostSTT class="mb-10 mt-10" />
    <!-- <NFItem class="mt-10" />
    -->
    <NF />
    <Footer class="mt-10" />
  </div>
</template>

<script>
import LeftBar from "@/components/LeftBar.vue";
import PostSTT from "@/components/CreatePostComponent.vue";
import NFItem from "@/components/NFItem.vue";
import Footer from "@/components/footer.vue";
import NF from "@/components/NF.vue";
export default {
  name: "feedsview",
  components: { PostSTT, NFItem, Footer, NF },
};
</script>

<style></style>

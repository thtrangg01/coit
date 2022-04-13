<template>
  <div>
     <PostSTT class="mb-10 mt-10" />
    <NFItem class="mt-10" />
  </div>
</template>

<script>
import PostSTT from "@/components/CreatePostComponent.vue";
import NFItem from "@/components/NFItem.vue";
export default {
  name: "feedsview",
  components: { PostSTT, NFItem },
}
</script>

<style>

</style>
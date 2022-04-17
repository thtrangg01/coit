<template>
  <div>
    <a v-if="this.is_login">
      <img
        :src="cmtprops.user.photoURL"
        alt=""
        class="w-7 h-7 rounded-3xl border-2 border-solid border-black float-left"
    /></a>
    <span class="text-left">
      <span class="text-lg ml-2 float-left mt-2 font-semibold">{{
        cmtprops.user.displayName
      }}</span
      ><br />
    </span>
    <p>{{ cmtprops.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["cmtprops"],
};
</script>

<style></style>

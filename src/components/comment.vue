<template>
  <span>
    <a v-if="this.is_login">
      <img
        :src="nfprops.user.photoURL"
        alt=""
        class="w-7 h-7 rounded-3xl border-2 border-solid border-black float-left"
    /></a>

    <span class="text-base ml-3 float-left font-semibold">
      {{ cmtprops.user.displayName }}
    </span>

    <p class="ml-3 mb-3 break-words float-left text-left" style="width: 450px">
      {{ cmtprops.content }}
    </p>
  </span>
</template>

<script>
export default {
  props: ["cmtprops"],
};
</script>

<style></style>

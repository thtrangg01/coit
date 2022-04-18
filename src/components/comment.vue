<template>
  <div>
    <span style="margin: auto auto"
    ><img
        style="margin-left: 10px"
        :src="cmtprops.user.photoURL"
        alt=""
        class="mt-1 w-10 h-10 rounded-3xl border-2 border-solid border-black float-left"
    /></span>

    <span class="text-base ml-3 float-left font-semibold">
      {{ cmtprops.user.displayName }}
    </span>

    <p class="ml-3 mb-3 break-words float-left text-left" style="width: 450px">
      {{ cmtprops.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["cmtprops"],
};
</script>

<style></style>

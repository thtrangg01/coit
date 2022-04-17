<template>
  <div class="text-center">
    <div class="float-right mr-20">
      <RightBar class="" />
    </div>
    <div class="mr-28">
      <SLTK class="" />
    </div>
    <div><TTYT class="inline-block ml-96" /></div>

    <f class="" />
  </div>
</template>

<script>
import f from "@/components/footer";
import RightBar from "@/components/RightBar.vue";
import SLTK from "@/components/SLTK.vue";
import TTYT from "@/components/TTYT.vue";

export default {
  name: "Statistical",
  components: { f, SLTK, RightBar, TTYT },
};
</script>

<style></style>

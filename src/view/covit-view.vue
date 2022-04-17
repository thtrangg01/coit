<template>
  <div>
    <div class="text-center">
      <SLTK class="flex-row inline-block" />
    </div>
    <div class="text-center">
      <TTYT class="inline-block" />
    </div>

    <!-- <RightBar class="float-right mr-10" /> -->

    <f class="" />
  </div>
</template>

<script>
import f from "@/components/footer";
import RightBar from "../components/RightBar.vue";
import SLTK from "@/components/SLTK.vue";
import TTYT from "@/components/TTYT.vue";

export default {
  name: "Statistical",
  components: { f, SLTK, RightBar, TTYT },
};
</script>

<style>
</style>

<template>
  <div>
    <SLTK class="flex-row"/>
    <!-- <RightBar class="float-right mr-10" /> -->

    <f class="" />
  </div>
</template>

<script>
import f from "@/components/footer";
import RightBar from "../components/RightBar.vue";
import SLTK from '@/components/SLTK.vue';
export default {
  name: "Statistical",
  components: { f, SLTK, RightBar  },
};
</script>

<style>
</style>

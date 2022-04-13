<template>
  <div>
    <!-- <Statistical /> -->
    <RightBar class="absolute mr-10" />
    <f class="absolute" />
  </div>
</template>

<script>
import Statistical from "@/components/Statistical.vue";
import f from "@/components/footer";
import RightBar from "../components/RightBar.vue";
import LeftBar from "../components/LeftBar.vue";
export default {
  name: "Statistical",
  components: { f, Statistical, RightBar },
};
</script>

<style>

</style>

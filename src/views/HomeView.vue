/* eslint-disable */ 
<template lang="">
  <div>
    <headerVue />
    <div>home content</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import headerVue from "@/components/header.vue";

export default defineComponent({
  name: "HomeView",
  components: {headerVue}
})
</script>
<style lang="">
  
</style>
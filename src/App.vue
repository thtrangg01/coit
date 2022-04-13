<template>
  <div id="app">
    <h class="mb-10" />

    <leftBar class='absolute'/>
    <router-view/>

  </div>
</template>

<script>
import h from "./components/header.vue";

import leftBar from "./components/LeftBar.vue";

export default {
  name: "App",
  components: { h, leftBar},

};
</script>
<style></style>

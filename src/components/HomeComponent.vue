<template>
  <div id="home" class="flex-container">

  </div>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style scoped>
.flex-container {
  position: relative;
  top:100px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-content: space-around;
  border: 2px solid;
  padding: 5px;
  flex-wrap: wrap;
  width: 480px;
}
</style>
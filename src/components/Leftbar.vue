<template>
  <div>
    <router-link to="/" class="router-link"> <p>Trang chủ</p></router-link>
    <router-link to="/new">Chuyện của tôi</router-link>
    <div>
      <p v-b-toggle.collapse-1 variant="primary">
        Toggle Collapse <i class="fas fa-angle-down"></i>
      </p>
      <b-collapse id="collapse-1" class="mt-2">
        <p class="card-text"><span class="bold">Hanoi:</span> 0123456789</p>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBar",
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>

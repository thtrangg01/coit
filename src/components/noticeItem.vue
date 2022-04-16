<template>
  <div class="notice-item" :id="noticeProps.id">
    <div class="notice-item-img">
      <img
          class="user-icon"
          :src="noticeProps.img"
          alt="user-icon"
      />
    </div>
    <div class="notice-item-content">
      <p>{{ noticeProps.content }}</p>
    </div>
    <div class="notice-item-hide" role="button" @click="hideNotice">HIDE</div>
  </div>
</template>

<script scoped>
export default {
  nane: "noticeItem",
  props: ["noticeProps"],
  methods:{
    hideNotice(){
      this.$emit("item-hide");
    }
  }
};
</script>

<style>
.user-icon {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 12px;
}
.notice-item {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  background-color: white;
  flex-wrap: wrap;
  border: transparent;
  margin: 4px;
  width: 440px;
  max-height: 100px;
}
.notice-item:hover {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  background-color: gainsboro;
  flex-wrap: wrap;
  margin: 4px;
  width: 440px;
}
.notice-item:hover > .notice-item-hide {
  margin-top: 20px;
  margin: auto auto;
  display: flex;
}
.notice-item-img {
  margin: 15px;
}
.notice-item-content {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 300px;
  text-align: left;
}
.notice-item-hide {
  display: none;
}
</style>
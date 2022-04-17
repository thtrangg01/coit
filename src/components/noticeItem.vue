<template>
  <div class="notice-item" :id="noticeProps.id" role="button" @click="changeReaded">
    <div class="notice-item-img">
      <img
          class="user-icon"
          :src="this.photo_link"
          alt="user-icon"
      />
    </div>
    <div :class="noticeProps.isReaded?'notice-item-content-readed':'notice-item-content'">
      {{this.noticeContent}}
      <p style="color: grey">{{timeSince}}</p>
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
    },
    changeReaded(){
      this.$emit("change-readed");
    }
  },
  computed:{
    noticeContent(){
      let content = "";
      if (this.noticeProps.type === "comment"){
        let comms = this.noticeProps.feed.comments;
        let comment = comms[comms.length-1];
        content = comment.user.displayName + " đã comment vào bài viết của bạn: "+comment.content;
        this.photo_link = comment.user.photoURL;
      }
      else if(this.noticeProps.type === "react"){
        let reas = this.noticeProps.feed.likes;
        let react = reas[reas.length-1];
        content = react.displayName + " đã like bài viết của bạn!";
        this.photo_link = react.photoURL;
      }
      if(content.length>100) return content.substring(0,100)+"...";
      else return content;
    },
    timeSince() {
      let date = this.noticeProps.create_date;
      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " năm trước";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " tháng trước";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " ngày trước";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " giờ trước";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " phút trước";
      }
      return Math.floor(seconds) + " giây trước";
    }
  },
  data(){
    return{
      photo_link:"",
    };
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
  max-height: 100px;
  text-align: left;
  overflow: hidden;
}
.notice-item-content-readed{
  margin-top: 5px;
  margin-bottom: 5px;
  width: 300px;
  max-height: 100px;
  text-align: left;
  overflow: hidden;
  color: gray;
}
.notice-item-hide {
  display: none;
  border-radius: 50px;
  margin: auto auto;
  padding: 10px;
}
.notice-item-hide:active {
  background: #c6c6c6;
}
</style>
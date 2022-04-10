<template>
  <div class="flex-container">
    <div class="flex-container-row">
      <img
          class="user-icon"
          src="https://nguoinoitieng.tv/images/nnt/102/1/bgom.jpg"
          alt="user-icon"
          @click="truyCapUser"
      />

      <form action="post_post">
        <div class="input-cam">
          <div class="input-top">
            <span class="text-input-span" contenteditable="true"> </span>
            <a @click="taiAnh">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OOjs_UI_icon_camera.svg/2048px-OOjs_UI_icon_camera.svg.png"
                  alt="HTML tutorial"
                  class="inside-input-cam"
              />
            </a>
          </div>
          <div class="img-content" style="display: flex">
            <img
                src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/11/28/tiem-vaccine-tre-em-1638069697701984230006.jpeg"
                alt="img-content"
            />
          </div>
        </div>
      </form>
    </div>
    <div class="button-div">
      <button style="float: right" @click="dangBai">
        <strong> Đăng bài </strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    truyCapUser() {
      console.log("Truy cap User");
    },
    taiAnh() {
      console.log("Tai anh len");
    },
    dangBai() {
      console.log("Dang bai");
    },
  },
};
</script>

<style scoped>
.user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
}
.flex-container {
  position: relative;
  top:100px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-content: space-around;
  border: 2px solid;
  border-radius: 12px;
  background-color: whitesmoke;
  padding: 5px;
  flex-wrap: wrap;
  width: 480px;
  border-color: grey;
}
.flex-container-row {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  padding: 10px;
}
button {
  border-radius: 16px;
  padding: 7px;
  background: lightskyblue;
  border: transparent;
  margin-bottom: 10px;
  margin-right: 10px;
}
button:active {
  border-radius: 16px;
  padding: 7px;
  background: #a0d6f6;
  border: transparent;
  margin-bottom: 10px;
  margin-right: 10px;
}
.text-input-span {
  background: transparent;
  border: transparent;
  margin: 5px;
  width: 350px;
  min-height: 20px;
  display: inline-block;
  width: 350px;
}
.input-cam {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  background: white;
  box-shadow: 0px 4px lightgrey;
  border-radius: 10px;
}
.input-top {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  width: auto;
}
.inside-input-cam {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  margin-top: 7px;
  float: right;
}
.img-content > img {
  max-width: 380px;
}
</style>

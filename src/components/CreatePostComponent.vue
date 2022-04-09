<template>
  <div class="flex-container">
    <div class="flex-container-row">
      <img
          class="user-icon"
          src="https://nguoinoitieng.tv/images/nnt/102/1/bgom.jpg"
          alt="user-icon"
          style="width: 30px; height: 30px"
          @click="truyCapUser"
      />
      <form action="post_post">
        <div class="input-cam">
          <input
              type="text"
              style="width: 350px"
              placeholder="Enter your content"
          />
          <a @click="taiAnh">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OOjs_UI_icon_camera.svg/2048px-OOjs_UI_icon_camera.svg.png"
                alt="HTML tutorial"
                class="inside-input-cam"
            />
          </a>
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.user-icon {
  border-radius: 50%;
  margin-right: 12px;
  margin-left: 5px;
}
.flex-container {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  border: 2px solid;
  border-radius: 12px;
  background-color: azure;
  padding: 5px;
  flex-wrap: wrap;
  width: 450px;
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
input {
  background: transparent;
  border: transparent;
  margin: 5px;
}
.input-cam {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  background: white;
  box-shadow: 0px 4px lightgrey;
  border-radius: 10px;
}
.inside-input-cam {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
</style>

<template>
  <div class="flex-container rounded-3xl">
    <div class="flex-container-row">
      <img
        class="user-icon border-2 border-solid border-black"
        src="https://i.pinimg.com/originals/8e/1d/78/8e1d788660189c2c9c02d282394ef8a9.png"
        alt="user-icon"
        @click="truyCapUser"
      />

      <form>
        <div class="input-cam">
          <div class="input-top">
            <span class="text-input-span"
              role="textbox"
              style="width: 350px"
              contenteditable="true"
              @input="onDivInput"
            />
            <a @click="taiAnh">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OOjs_UI_icon_camera.svg/2048px-OOjs_UI_icon_camera.svg.png"
                  alt="HTML tutorial"
                  class="inside-input-cam"
              />
            </a>
          </div>
          <div class="img-content" id="img-content" style="display: flex">
<!--            <img-->
<!--                src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/11/28/tiem-vaccine-tre-em-1638069697701984230006.jpeg"-->
<!--                alt="img-content"-->
<!--            />-->
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
import StoreService from "../service/StoreService";
export default {
  name: "CreatePostComponent",
  methods: {
    onDivInput(e) {
      this.content = e.target.innerHTML;
    },
    truyCapUser() {
      console.log("Truy cap User");
    },
    taiAnh() {
      var input=document.createElement('input');
      input.type="file";
      input.click();
      input.addEventListener("change", handleFiles, false);
      async function handleFiles() {
        const fileList = this.files;
        var image_link = await StoreService.upload(fileList[0]);
        console.log(image_link);
        var imgcontent = document.getElementById("img-content");
        var img = document.createElement("img");
        img.src = image_link;
        imgcontent.innerHTML="";
        imgcontent.appendChild(img);
      }
      console.log("Tai anh len");
    },
    dangBai() {
      console.log("Dang bai " + this.content);
    },
  },
  data(){
    return {
      content:"",
    };
  }
};
</script>

<style scoped>
.user-icon {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 12px;
}
.flex-container {
  position: static;
  top: 100px;
  margin: 0 auto;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-content: space-around;
  border: 2px solid;
  padding: 5px;
  flex-wrap: wrap;
  width: 480px;
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
  display: inline-block;
}
.text-input-span:empty::before{
  content: "Enter your content...";
  color: grey;
  display: inline-block;
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
  float: top;
}
.img-content > img {
  max-width: 380px;
}
</style>

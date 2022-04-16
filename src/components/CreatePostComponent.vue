<template>
  <div class="flex-container rounded-3xl">
    <div class="flex-container-row">
      <a :href="this.web_link">
        <img
          class="user-icon border-2 border-solid border-black"
          :src="this.photo_link"
          alt="user-icon"
          @click="truyCapUser"
        />
      </a>

      <form>
        <div class="input-cam">
          <div class="input-top">
            <span
              id="text-input-span"
              class="text-input-span"
              role="textbox"
              style="width: 350px"
              contenteditable="true"
              @input="onDivInput"
            />
            <!-- <span
                  v-else
                  class="span-notlogin"
                  role="textbox"
                  style="width: 350px"
                  contenteditable="false"
                  @input="onDivInput"
            /> -->
            <a @click="taiAnh" v-if="this.is_login">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OOjs_UI_icon_camera.svg/2048px-OOjs_UI_icon_camera.svg.png"
                alt="HTML tutorial"
                class="inside-input-cam cursor-pointer"
              />
            </a>
          </div>
          <div class="img-content" id="img-content" style="display: flex" v-if="this.is_login">
            <!--            <img-->
            <!--                src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/11/28/tiem-vaccine-tre-em-1638069697701984230006.jpeg"-->
            <!--                alt="img-content"-->
            <!--            />-->
          </div>
        </div>
      </form>
    </div>
    <div class="button-div" v-if="this.is_login">
      <button style="float: right" @click="dangBai">
        <strong> Đăng bài </strong>
      </button>
    </div>
  </div>
</template>

<script>
import StoreService from "../service/StoreService";
import AuthService from "@/service/AuthService";
import DatabaseService from "@/service/DatabaseService";
import firebase from "firebase";
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
      var input = document.createElement("input");
      input.type = "file";
      input.click();
      input.addEventListener("change", handleFiles, false);
      function handleFiles() {
        const fileList = this.files;

        StoreService.upload(fileList[0])
          .then((result) => {
            var image_link = result;
            console.log(image_link);
            var imgcontent = document.getElementById("img-content");
            var img = document.createElement("img");
            img.src = image_link;
            img.id = "img-1";
            img.style.maxWidth = "380px";
            imgcontent.innerHTML = "";
            imgcontent.appendChild(img);
          })
          .catch((error) => {});
      }
      console.log("Tai anh len");
    },
    dangBai() {
      let img_link = "";
      if (document.getElementById("img-1") != null)
        img_link = document.getElementById("img-1").src;
      console.log("Dang bai " + this.content + "\n image " + img_link);
      let feed = {
        title: "",
        desc: this.content,
        image: img_link,
        user_id: this.uid,
        user_name: this.user_name,
        user_image: this.photo_link,
        created_at: Date.now(),
        updated_at: Date.now(),
      };
      let mss = DatabaseService.create(feed);
      console.log(mss);
      document.getElementById("img-content").innerHTML = "";
      document.getElementById("text-input-span").innerHTML = "";
    },
  },
  data() {
    let is_login = true;
    let web_link = "";
    let user_name = "";
    let uid = "";
    let photo_link =
      "https://lh3.googleusercontent.com/a/AATXAJz8KD9cML7f3e_uGMzgBU15IwaOImlfi3SyGX50=s96-c";
    let user = AuthService.getCurrentUser();
    console.log(user);
    DatabaseService.getNewest()
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {});

    return {
      content: "",
      uid,
      user_name,
      photo_link,
      web_link,
      is_login,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(user);
        this.user_name = this.user.displayName;
        this.uid = this.user.uid;
        this.photo_link = this.user.photoURL;
        this.is_login=true;
        console.log("An--"+this.user);
      } else {
        this.user = null;
        this.is_login=false;
      }
    });
  },
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
.text-input-span:empty::before {
  content: "Enter your content...";
  color: grey;
  display: inline-block;
}
.span-notlogin:before{
  background: transparent;
  border: transparent;
  margin: 5px;
  width: 350px;
  min-height: 20px;
  display: inline-block;
  width: 350px;
  content: "Please login to post your feeds";
  color: black;
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
</style>

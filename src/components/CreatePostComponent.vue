<template>
  <div class="flex-container rounded-3xl">
    <div class="flex-container-row">
      <a :href="this.web_link" v-if="this.is_login">
        <img
            class="user-icon border-2 border-solid border-black"
            :src="this.photo_link"
            alt="user-icon"
            @click="truyCapUser"
        />
      </a>
      <a @click="userLogin" role="button" v-else>
        <img
            class="user-icon border-2 border-solid border-black"
            :src="this.photo_link"
            alt="user-icon"
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
                v-if="this.is_login"
                @input="onDivInput"
            />
            <span
                v-else
                class="span-notlogin"
                role="button"
                style="width: 350px"
                contenteditable="false"
                @input="onDivInput"
                @click="userLogin"
            />
            <a @click="taiAnh" v-if="this.is_login">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OOjs_UI_icon_camera.svg/2048px-OOjs_UI_icon_camera.svg.png"
                  alt="HTML tutorial"
                  class="inside-input-cam cursor-pointer"
              />
            </a>
          </div>
          <div
              class="img-content"
              id="img-content"
              style="display: flex"
              v-if="this.is_login"
          >
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
      this.content = e.target.innerText;
    },
    truyCapUser() {
      console.log("Truy cap User");
    },
    userLogin() {
      firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then((user) => {
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
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
            .catch((error) => {
            });
      }

      console.log("Tai anh len");
    },
    dangBai() {
      if (
          this.content.trim() != "" ||
          document.getElementById("img-1") != null
      ) {
        let img_link = "";
        if (document.getElementById("img-1") != null)
          img_link = document.getElementById("img-1").src;
        console.log("Dang bai " + this.content + "\n image " + img_link);
        let feed = {
          title: "",
          desc: this.content,
          image: img_link,
          user: this.user,
          created_at: Date.now(),
          updated_at: Date.now(),
        };
        let mss = DatabaseService.create(feed);
        console.log(mss);
        this.$root.$refs.NF.afterPost(feed);
        document.getElementById("img-content").innerHTML = "";
        document.getElementById("text-input-span").innerHTML = "";
        this.content = "";
      }
    },
  },
  data() {
    let is_login = true;
    let web_link = "";
    let photo_link =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png";

    return {
      content: "",
      photo_link,
      web_link,
      is_login,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = {
          uid: user.uid,
          photoURL: user.photoURL,
          email: user.email,
          displayName: user.displayName,
        };
        this.photo_link = this.user.photoURL;
        this.is_login = true;

        console.log("this.user");
        console.log(this.user);
      } else {
        this.user = null;
        this.is_login = false;
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
  content: "Bạn muốn chia sẻ điều gì...";
  color: grey;
  display: inline-block;
}

.span-notlogin:before {
  background: transparent;
  border: transparent;
  margin: 5px;
  width: 350px;
  min-height: 20px;
  display: inline-block;
  width: 350px;
  content: "Hãy đăng nhập để đăng bài của bạn";
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

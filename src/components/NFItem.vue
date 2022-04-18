<template>
  <div class="text-center" :id="nfprops.feed_id">
    <div class="inline-block">
      <div
        class="text-center h-auto border-2 border-black border-solid rounded-3xl"
        style="width: 480px"
      >
        <div class="inline-block">
          <div class="h-12 mt-2" style="width: 480px; margin-left: 10px">
            <span
              ><img
                :src="nfprops.user.photoURL"
                alt=""
                class="mt-1 w-10 h-10 rounded-3xl border-2 border-solid border-black float-left"
            /></span>
            <span class="text-left">
              <span class="text-lg ml-2 float-left mt-2 font-semibold">{{
                nfprops.user.displayName
              }}</span
              ><br />
            </span>
          </div>

          <div
            class="text-left ml-3 break-words"
            style="width: 450px; white-space: pre-line"
          >
            {{ nfprops.desc }}
          </div>

          <div class="inline-block mr-14">
            <img
              :src="nfprops.image"
              alt=""
              class="mt-3 mr-2 cover"
              style="width: 460px"
            />
          </div>

          <div>
            <div class="ml-3 cursor-pointer" @click="toggleLike()">
              <svg
                v-if="!like"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 mt-2 float-left"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                />
              </svg>

              <svg
                v-if="like"
                class="w-5 h-5 mt-2 float-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                />
              </svg>
            </div>
            <div class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 mt-2 float-left mx-3"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"
                />
              </svg>
            </div>
            <div class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 mt-2 float-left"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"
                />
              </svg>
            </div>
          </div>
          <hr class="inline-block mr-16" style="width: 478px" />
          <Comment
            v-if="haveComment"
            v-for="cmt in comments"
            :key="cmt.user.uid"
            :cmtprops="cmt"
          />
          <hr class="inline-block mr-16" v-if="haveComment" style="width: 478px" />
          <div class="ml-2 mr-2 mb-3 h-6">
            <span class="text-left float-left">
              <span
              ><img
                  style=""
                  :src="this.user.photoURL"
                  alt=""
                  class=" w-8 h-8 rounded-3xl border-2 border-solid border-black float-md-left"
              /></span>
              <input
                v-if="this.is_login"
                placeholder="Thêm bình luận..."
                style="width: 340px"
                class="ml-3 text-sm"
                v-model="content"
              />
              <input
                v-else
                @input="onDivInput"
                placeholder="Bạn cần đăng nhập để bình luận"
                style="width: 370px"
                class="ml-3 text-sm"
                @click="userLogin"
              />
            </span>

            <button
              v-if="this.is_login"
              @click="PostComment"
              class="text-sm float-left ml-3"
            >
              Đăng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./comment.vue";
import { v4 as uuid_v4 } from "uuid";
import StoreService from "../service/StoreService";
import AuthService from "@/service/AuthService";
import DatabaseService from "@/service/DatabaseService";
import firebase from "firebase";
export default {
  name: "NFItem",
  props: ["nfprops"],
  components: { Comment },
  computed:{
    haveComment(){
      if(this.comments.length>0) return true;
      else return false;
    }
  },

  methods: {
    toggleLike() {
      this.like = !this.like;
      DatabaseService.changeLike(this.nfprops.id,this.user.uid);
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

    PostComment() {
      console.log("abc");
      if (this.content.trim() != "") {
        let comment = {
          comment_id: uuid_v4(),
          user: this.user,
          content: this.content,
          created_at: Date.now(),
          updated_at: Date.now(),
        };
        this.comments.push(comment);
        let mss = DatabaseService.insertComment(this.nfprops.id,comment);
        this.content = "";
      }
    },
  },

  data() {
    let is_login = false;
    let like = false;
    let user = "";

    return {
      content: "",
      comments: [],
      user,
      is_login,
      like,
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
        this.is_login = true;
      }
      else this.is_login=false;
    });

    if(this.nfprops.likes.includes(this.user.uid)){
      this.like=true;
    }
    else this.like=false;

    this.comments.concat(this.nfprops.comments);
  },
};
</script>

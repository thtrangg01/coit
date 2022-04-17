<template>
  <div id="app">
    <h class="mb-10" />

    <LeftBar class="absolute" />

    <router-view />
    <!-- <button @click="click"> click </button>   -->
  </div>
</template>

<script>
import h from "./components/header.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "./components/footer.vue";
// import NoticesService from "@/service/NoticesService.js"

export default {
  name: "App",
  components: { h, LeftBar, Footer },
  methods: {
    // click(){
    //   console.log("click");
    //   //
    //   let feed = {
    //     "created_at": 1650175815639,
    //     "desc": "Hello\nHôm nay tham gia tiêm phòng cho bé! ",
    //     "id": "0a60c659-e624-4ccf-962c-31a521f4076a",
    //     "image": "https://firebasestorage.googleapis.com/v0/b/fir-firebase-562a6.appspot.com/o/images%2F9a5a0a23-04df-445f-a115-8b2b6febefcb.jpg?alt=media&token=c0d1d172-2fab-45b7-9ee7-572d4bd2f7b2",
    //     "title": "",
    //     "updated_at": 1650175815639,
    //     "user_id": "NdkrXWkIYAYloD0zahsTkh8mT2D2",
    //     "user_image": "https://lh3.googleusercontent.com/a/AATXAJz8KD9cML7f3e_uGMzgBU15IwaOImlfi3SyGX50=s96-c",
    //     "user_name": "Tuấn An Nguyễn"
    //   };
    //   //
    //   NoticesService.addNotices(feed);
    // }
  }
};
</script>
<style></style>

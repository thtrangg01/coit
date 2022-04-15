<template>
  <nav class="h-14 text-center" style="background-color: #9cb6d9">
    <div>
      <span class="cursor-pointer">
        <svg
          height="35px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="ml-3 mt-2 float-left"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M555.3 300.1L424.3 112.8C401.9 81 366.4 64 330.4 64c-22.63 0-45.5 6.75-65.5 20.75C245.2 98.5 231.2 117.5 223.4 138.5C220.5 79.25 171.1 32 111.1 32c-61.88 0-111.1 50.08-111.1 111.1L-.0028 368c0 61.88 50.12 112 112 112s112-50.13 112-112L223.1 218.9C227.2 227.5 231.2 236 236.7 243.9l131.3 187.4C390.3 463 425.8 480 461.8 480c22.75 0 45.5-6.75 65.5-20.75C579 423.1 591.5 351.8 555.3 300.1zM159.1 256H63.99V144c0-26.5 21.5-48 48-48s48 21.5 48 48V256zM354.8 300.9l-65.5-93.63c-7.75-11-10.75-24.5-8.375-37.63c2.375-13.25 9.75-24.87 20.75-32.5C310.1 131.1 320.1 128 330.4 128c16.5 0 31.88 8 41.38 21.5l65.5 93.75L354.8 300.9z"
          />
        </svg>
      </span>

      <span class="float-left ml-3 mt-2 text-lg cursor-pointer">CO-IT</span>
    </div>

    <div class="inline-block mt-2 mr-16">
      <span>
        <b-form-input
          class="mr-4 float-left"
          style="width: 400px"
          v-model="text"
          placeholder="Search"
        ></b-form-input>
      </span>
      <button class="btn-search float-left">
        <svg
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          />
        </svg>
      </button>
    </div>

    <div class="float-right mt-2">
      <button class="">
        <svg
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="mr-4"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
          />
        </svg>
      </button>

      <button @click="userLogin()" class="btn-login">
        <svg
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="mr-4"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
          />
        </svg>
      </button>

      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()"
      >
        Log out
      </button>

      <p v-if="user">{{ user.displayName }}</p>
      <p v-if="user">{{ user.email }}</p>
    </div>
  </nav>
</template>

<script>
// import notice from "@/components/notice.vue";
import firebase from "firebase";
export default {
  name: "header",
  data() {
    return {
      user: null,
    };
  },
  components: {},
  methods: {
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
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/");
          });
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(user.displayName);
      } else {
        this.user = null;
      }
    });
  },
};
</script>

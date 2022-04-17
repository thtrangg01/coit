<template>
  <div class="ml-24">
    <router-link to="/" class="text-black">
      <p class="cursor-pointer no-underline text-lg">Trang chủ</p></router-link
    >
    <router-link to="/feeds" class="text-black"
      ><p class="cursor-pointer mb-2 no-underline text-lg">
        Chuyện của tôi
      </p></router-link
    >

    <div class="mt-3">
      <!-- Using modifiers -->
      <button class="text-lg" v-b-toggle.collapse-2>Hotlines</button>

      <b-collapse id="collapse-2">
        <p class="ml-4 w-60 wrap mt-2">
          - Bộ Y tế: 19003228 <br />
          - Sở Y tế Hà Nội: 19009095 <br />
          - Sở Thông tin và Truyền thông Hà Nội: 1022
        </p>
      </b-collapse>
    </div>
  </div>
</template>

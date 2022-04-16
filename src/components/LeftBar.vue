<template>
  <div class="ml-24">
    <router-link to="/">
      <p class="cursor-pointer text-black no-underline">
        Trang chủ
      </p></router-link
    >
    <router-link to="/feeds"
      ><p class="cursor-pointer mb-2 text-black no-underline">
        Chuyện của tôi
      </p></router-link
    >

    <div>
      <!-- Using modifiers -->
      <button v-b-toggle.collapse-2>Hotlines</button>

      <b-collapse id="collapse-2">
        <p class="ml-4 w-60 wrap">
          - Bộ Y tế: 19003228 <br />
          - Sở Y tế Hà Nội: 19009095 <br />
          - Sở Thông tin và Truyền thông Hà Nội: 1022
        </p>
      </b-collapse>
    </div>
  </div>
</template>

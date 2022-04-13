<template>
  <div class="ml-24">
    <p>Trang chủ</p>
    <p class="font-bold">Chuyện của tôi</p>
    <div>
      <!-- Using modifiers -->
      <button v-b-toggle.collapse-2>Hotlines</button>

      <b-collapse id="collapse-2">
        <p class="ml-16 w-60 wrap border-t border-b border-l border-r rounded-2xl p-2 border-solid border-black">
          - Bộ Y tế: 19003228 <br />
          - Sở Y tế Hà Nội: 19009095 <br />
          - Sở Thông tin và Truyền thông Hà Nội: 1022
        </p>
      </b-collapse>
    </div>
  </div>
</template>

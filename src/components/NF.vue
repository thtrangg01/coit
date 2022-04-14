<template>
  <div class="text-center">
    <div class="inline-block">
      <NFItem
        class="mt-10"
        v-for="nfi in nfs"
        :key="nfi.feed_id"
        :nfprops="nfi"
      />
    </div>
  </div>
</template>

<script>
import NFItem from "./NFItem.vue";

export default {
  name: "nfs",
  components: { NFItem },

  data() {
    return {
      nfs: [
        {
          feed_id: "notice-1",
          user_name: "Trịnh Khánh Huyền",
          image:
            "http://congdoan.vnpt.vn/Uploads/image/News/Thumbnails/2020/4/Thumbnails07372020053721unnamed.jpg",
          user_image:
            "https://i.pinimg.com/736x/21/2d/12/212d12e421963f8a66f95aece1182069.jpg",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          feed_id: "notice-1",
          user_name: "Trịnh Khánh Huyền",
          image:
            "http://congdoan.vnpt.vn/Uploads/image/News/Thumbnails/2020/4/Thumbnails07372020053721unnamed.jpg",
          user_image:
            "https://i.pinimg.com/736x/21/2d/12/212d12e421963f8a66f95aece1182069.jpg",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          feed_id: "notice-1",
          user_name: "Trịnh Khánh Huyền",
          image:
            "http://congdoan.vnpt.vn/Uploads/image/News/Thumbnails/2020/4/Thumbnails07372020053721unnamed.jpg",
          user_image:
            "https://i.pinimg.com/736x/21/2d/12/212d12e421963f8a66f95aece1182069.jpg",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          feed_id: "notice-1",
          user_name: "Trịnh Khánh Huyền",
          image:
            "http://congdoan.vnpt.vn/Uploads/image/News/Thumbnails/2020/4/Thumbnails07372020053721unnamed.jpg",
          user_image:
            "https://i.pinimg.com/736x/21/2d/12/212d12e421963f8a66f95aece1182069.jpg",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        
      ],
    };
  },
};
</script>

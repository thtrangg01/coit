<template>
  <div class="text-left">
    <div class="">
      <RightBarItem
        :RBprops="RBi"
        v-for="RBi in RBs"
        :key="RBi._id"
        class="mb-10"
      />
    </div>
  </div>
</template>

<script>
import DatabaseService from "@/service/DatabaseService";
import RightBarItem from "./RightBarItem.vue";

export default {
  name: "RBs",
  components: { RightBarItem },

  data() {
    return {
      RBs: [
        {
          _id: "RB-1",
          image:
            "data:image/jpeg;base64,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",
          title: "Số liệu Covid-19 tại Việt Nam",
          desc: "Kể từ khi dịch bùng phát từ đầu 2020 đến nay, Việt Nam đã ghi nhận 0 ca nhiễm, 0 người khỏi bệnh, 0 bệnh nhân đang điều trị và 0 ca tử vong.",
        },
        {
          _id: "RB-2",
          image:
            "data:image/jpeg;base64,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",
          title: "Covid hôm nay: F0 cả nước tiếp tục giảm",
          desc: "Những ca mắc mới trong nước tiếp tục giảm sâu. Đến nay cũng đã có 12.414 trẻ em từ 5-11 tuổi được tiêm mũi 1 vắc xin phòng Covid-19.",
        },
        {
          _id: "RB-3",
          image:
            "data:image/jpeg;base64,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",
          title: "Hà Nội triển khai tiêm vắc xin cho trẻ",
          desc: "Thành phố Hà Nội hiện có khoảng 950.000 trẻ trong độ tuổi 5-12. Quận Hai Bà Trưng đã triển khai tiêm cho học sinh tại một số trường",
        },
        {
          _id: "RB-4",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          _id: "RB-5",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          _id: "RB-5",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          _id: "RB-5",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          _id: "RB-5",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
      ],
    };
  },
};
</script>

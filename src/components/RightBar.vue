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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          _id: "RB-2",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
        },
        {
          _id: "RB-3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoK0-0nKEMLGDXU5Vlx2BPgOe5F-B2m2MDq5vsgkAFY6ETKoRQ2gUPAJ6_kngPMIZ614&usqp=CAU",
          title: "Bộ Y tế",
          desc: "Bộ Y tế: Bắt buộc 100% cơ sở tiêm vaccine phòng COVID-19 cho trẻ từ 5 – dưới 12 tuổi phải ký số",
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
            "https://covid19.qltns.mediacdn.vn/3548440734054686…5042022-1649212949246-16492129500041893371146.jpg",
          title: "Dự phòng - điều trị",
          desc: "Kon Tum: Tư vấn, điều trị cho bệnh nhân hậu COVID-19",
        },
        {
          _id: "RB-6",
          image:
            "https://covid19.qltns.mediacdn.vn/3548440734054686…847829-1650199689557-16501996898051652932713.jpeg",
          title: "Vaccine - Tiêm chủng",
          desc: "Gần 8.500 trẻ 11 tuổi ở Hà Nội đã tiêm vaccine COVID-19, chưa ghi nhận trường hợp phản ứng bất thường",
        },
        {
          _id: "RB-7",
          image:
            "https://covid19.qltns.mediacdn.vn/thumb_w/740/354844073405468672/2022/4/17/avatar1650199626611-16501996269391196284900-0-0-315-504-crop-1650199640120413244506.jpg",
          title: "Dự phòng - điều trị",
          desc: "Số ca COVID-19 còn rất ít, Thanh Hóa giải thể các khu cách ly, điều trị COVID-19",
        },
        {
          _id: "RB-8",
          image:
            "https://covid19.qltns.mediacdn.vn/354844073405468672/2022/4/16/ca-moi-16-16501058853742082112331-1650112090530-16501120908622088505419.jpeg",
          title: "Bản tin covid-19",
          desc: "Ngày 16/4: Số mắc mới COVID-19 giảm còn 18.474; ca tử vong thấp nhất trong nửa năm qua",
        },
      ],
    };
  },
};
</script>

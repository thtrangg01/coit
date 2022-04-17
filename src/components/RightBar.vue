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

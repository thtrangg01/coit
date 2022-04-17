<template>
  <div class="text-center">
    <div class="inline-block">
      <NFItem
        class="mt-10"
        :nfprops="nfi"
        v-for="nfi in nfs"
        :key="nfi.id"
      />
    </div>
  </div>
</template>

<script>
import DatabaseService from "@/service/DatabaseService";
import NFItem from "./NFItem.vue";

export default {
  name: "nfs",
  components: { NFItem },
  methods: {
    afterPost(feed) {
      this.nfs.unshift(feed);
    },
    loadFeeds(page) {
      DatabaseService.getNewest(page,10).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.nfs.push(doc.val());
        });
      });
    },
  },
  data() {
    return {
      nfs: [],
    };
  },
  created() {
    this.$root.$refs.NF = this;
    this.loadFeeds(1);
  },
};
</script>

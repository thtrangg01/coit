<template>
  <div class="text-center">
    <div class="inline-block">
      <NFItem class="mt-10" :nfprops="nfi" v-for="nfi in nfs" :key="nfi.id" />
    </div>
    <div>
      <button class="mt-10 opacity-70" @click="loadFeeds(++currentPage)">
        Load more
      </button>
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
      console.log("load more data");

      DatabaseService.getNewest(page, 10).then((snapshot) => {
        let newFeedArr = [];

        snapshot.forEach((doc) => {
          newFeedArr.unshift(doc.val());
        });

        // reverse feeds
        newFeedArr.forEach((feed) => {
          this.nfs.push(feed);
        });
      });
    },
  },
  data() {
    return {
      nfs: [],
      currentPage: 1,
    };
  },
  created() {
    this.$root.$refs.NF = this;
    this.loadFeeds(this.currentPage);
  },
};
</script>

<template>
  <a
    :href="RBprops.link_new"
    class="mb-10 cursor-pointer"
    style="text-decoration: none"
  >
    <div
      class="border-2 border-solid border-black rounded-xl text-black mb-10"
      style="width: 400px; height: 140px"
    >
      <div class="m-2">
        <h5 class="line-clamp-2 h-fit min-h-[3rem]">{{ RBprops.title }}</h5>
        <div class="flex flex-row h-full">
          <img
            :src="RBprops.image"
            alt=""
            class="w-auto h-20 rounded-lg mr-3"
          />
          <div>
            <p class="line-clamp-3 text-sm h-fit">
              {{ RBprops.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  nane: "RightBarItem",
  props: ["RBprops"],
};
</script>

<style></style>

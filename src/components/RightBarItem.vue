<template>
  <div
    class="border-2 border-solid border-black rounded-xl"
    style="width: 400px; height: 140px"
  >
    <div class="m-2">
      <h5 class="line-clamp-2 h-fit min-h-[3rem]">Bộ y tế</h5>
      <div class="flex flex-row h-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSy0N7lEnTtF3U_UweDWfMjfaOeAKHev2FQ&usqp=CAU" alt="" class="w-auto h-20 rounded-lg mr-3" />
        <div>
          <p class="line-clamp-3 text-sm h-fit">
            {{ RBprops.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  nane: "RightBarItem",
  props: ["RBprops"],
};
</script>

<style></style>

<template>
  <div class="w-screen h-screen bg-primary flex justify-center items-center">
    <div
      class="w-full h-full md:h-[45rem] flex gap-6 justify-center items-center"
    >
      <LogoSection />
      <span class="w-3 h-full bg-third rounded-full"></span>
      <div class="w-96 bg-white h-full"></div>
    </div>
  </div>
</template>

<script>
import LogoSection from "./components/LogoSection.vue";

export default {
  name: "App",
  components: {
    LogoSection,
  },
  data() {
    return {
      list: [
        { id: 1, title: "item1", timer: "11:69", decription: "lolrandomxd" },
        { id: 2, title: "item2", timer: "11:69", decription: "lolrandomxd" },
        { id: 3, title: "item3", timer: "11:69", decription: "lolrandomxd" },
      ],
    };
  },
};
</script>

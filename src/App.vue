<template>
  <div class="w-screen h-screen bg-primary flex justify-center items-center">
    <div class="flex gap-6 justify-center items-center">
      <LogoSection />
      <span
        class="bg-secondary h-[40rem] w-2 md:block hidden rounded-full"
      ></span>
      <DisplaySection :list="items" />
    </div>
  </div>
</template>

<script>
import LogoSection from "./components/LogoSection.vue";
import DisplaySection from "./components/DisplaySection.vue";

export default {
  name: "App",
  components: {
    LogoSection,
    DisplaySection,
  },
  data() {
    return {
      items: [
        { id: 1, title: "item1", timer: "11:69", decription: "lolrandomxd" },
        { id: 2, title: "item2", timer: "11:69", decription: "lolrandomxd" },
        { id: 3, title: "item3", timer: "11:69", decription: "lolrandomxd" },
      ],
    };
  },
};
</script>

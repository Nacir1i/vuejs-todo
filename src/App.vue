<template>
  <div
    class="w-screen h-screen bg-primary flex flex-wrap justify-center items-center"
  >
    <LogoSection />
  </div>
</template>

<script>
import LogoSection from "./components/LogoSection.vue";

export default {
  name: "App",
  components: {
    LogoSection,
  },
};
</script>

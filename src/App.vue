<template>
  <div class="w-screen h-screen bg-primary flex justify-center items-center">
    <div
      class="w-full h-full md:h-[45rem] flex gap-24 justify-center items-center"
    >
      <LogoSection />
      <span class="w-3 h-full bg-third rounded-full"></span>
      <div class="w-[30rem] h-full">
        <div class="w-full text-white flex justify-center items-center">
          <div class="w-full h-24 flex justify-around items-center">
            <h1 class="text-3xl font-bold">Create a new Task :</h1>
            <div class="flex items-center justify-between">
              <label
                for="toggle"
                class="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  v-model="display"
                  id="toggle"
                  class="sr-only peer"
                />
                <div
                  class="w-9 h-5 bg-third peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-fith"
                ></div>
                <span
                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >toggle</span
                >
              </label>
            </div>
          </div>
        </div>
        <CreateTask v-if="display" />
        <div
          :class="[
            display ? 'h-96' : 'h-[40rem]',
            'flex flex-col overflow-auto',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSection from "./components/LogoSection.vue";
import CreateTask from "./components/CreateTask.vue";

export default {
  name: "App",
  components: {
    LogoSection,
    CreateTask,
  },
  data() {
    return {
      list: [
        { id: 1, title: "item1", timer: "11:69", decription: "lolrandomxd" },
        { id: 2, title: "item2", timer: "11:69", decription: "lolrandomxd" },
        { id: 3, title: "item3", timer: "11:69", decription: "lolrandomxd" },
      ],
      display: false,
    };
  },
};
</script>

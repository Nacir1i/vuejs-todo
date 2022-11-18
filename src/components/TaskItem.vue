<template>
  <div class="w-full h-full p-2 flex justify-between items-center">
    <div class="w-11/12 h-full">
      <div class="h-1/5 flex gap-4 justify-center items-center">
        <h1 class="text-xl">{{ task.name }} -</h1>
        <h5 class="text-sm text-gray-400">{{ task.timer }}</h5>
      </div>
      <div
        class="h-4/5 p-4 flex justify-center items-center text-slate-400 text-2xl"
      >
        <h1>{{ task.description }}</h1>
      </div>
    </div>
    <i
      class="w-1/12 fa-solid fa-xmark text-center text-xl text-red-500 cursor-pointer"
    ></i>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: Object,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="w-full h-full p-2">
    <h1>{{ task.name }}</h1>
    <h1>{{ task.description }}</h1>
    <h1>{{ task.timer }}</h1>
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
  mounted() {
    console.log(this.task);
  },
};
</script>

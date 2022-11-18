<template>
  <form
    @submit.prevent="$emit('add', { name, description, timer })"
    class="w-full h-60 flex flex-col gap-y-4 justify-center items-center text-white"
  >
    <div class="w-full flex justify-between items-center">
      <label class="font-semibold text-md" for="name">What task is it ?</label>
      <input
        class="w-64 rounded-sm focus:outline-none bg-fith text-black p-1"
        type="text"
        v-model="name"
        id="name"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <label class="font-semibold text-md" for="description"
        >What is this task about ?</label
      >
      <input
        class="w-64 rounded-sm focus:outline-none bg-fith text-black p-1"
        type="text"
        v-model="description"
        id="description"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <label class="font-semibold text-md" for="name"
        >when should it be done ?</label
      >
      <input
        class="w-64 rounded-sm focus:outline-none bg-fith text-black p-1"
        type="date"
        v-model="timer"
        id="date"
      />
    </div>
    <button class="w-1/3 p-1 bg-third rounded-md" type="submit">save</button>
  </form>
</template>

<script>
export default {
  name: "CreateTask",
  data() {
    return {
      name: "",
      description: "",
      timer: "",
    };
  },
};
</script>

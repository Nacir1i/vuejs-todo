<template>
  <div
    class="w-screen h-screen md:w-96 md:h-[40rem] flex flex-col items-center justify-center bg-secondary rounded-md overflow-hidden"
  >
    <div
      class="w-[90%] md:w-full flex flex-col items-center justify-center gap-4"
    >
      <div
        class="w-full h-full bg-fourth p-4 rounded-sm"
        v-for="item in list"
        :key="item.id"
      >
        <ListItem
          :title="item.title"
          :timer="item.timer"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "DisplaySection",
  components: {
    ListItem,
  },
  props: {
    list: Array,
  },
};
</script>

<template>
  <div>
    <h1>title</h1>
    <p>timer</p>
    <h3>description</h3>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: String,
    timer: String,
    description: String,
  },
};
</script>

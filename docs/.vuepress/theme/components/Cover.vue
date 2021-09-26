<template>
  <div class="cover">
    <div ref="coverImage"></div>
  </div>
</template>

<script>
export default {
  name: "Cover.vue",
}
</script>

<style scoped>
.cover {
  height: 20rem;
}

.cover > div {
  background-image: url("https://user-images.githubusercontent.com/9425680/132937287-dc55e72b-c220-4280-9584-04d6e7bbcd38.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  right: 0;
  height: inherit;
}
</style>
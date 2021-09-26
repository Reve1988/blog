<template>
  <common-layout>
    <contents>
      <post-card :pages="this.$pagination.pages"/>
    </contents>
  </common-layout>
</template>

<script>
import CommonLayout from "./components/CommonLayout";
import Contents from "./components/Contents";
import PostCard from "./components/PostCard";

export default {
  name: "CategoryIndex",
  components: {
    CommonLayout,
    Contents,
    PostCard,
  },
}
</script>
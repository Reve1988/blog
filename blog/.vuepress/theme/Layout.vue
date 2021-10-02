<template>
  <common-layout>
    <contents>
      <post-card :pages="this.$site.pages"/>
    </contents>
  </common-layout>
</template>

<script>
import CommonLayout from "./components/CommonLayout";
import Contents from "./components/Contents";
import PostCard from "./components/PostCard";

export default {
  name: "Layout",
  components: {
    CommonLayout,
    Contents,
    PostCard,
  },
}
</script>
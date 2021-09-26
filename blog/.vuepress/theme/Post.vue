<template>
  <common-layout>
    <contents>
      <Content/>
    </contents>
    <template v-slot:bottom>
      <post-pagination
          :post-list="pages"
          :current-post="$page"/>
    </template>
  </common-layout>
</template>

<script>
import CommonLayout from "./components/CommonLayout";
import Contents from "./components/Contents";
import PostPagination from "./components/PostPagination";

export default {
  name: "Post",
  components: {
    CommonLayout,
    Contents,
    PostPagination,
  },
  data() {
    return {
      pages: [],
    }
  },
  mounted() {
    this.pages = this.$getPagination(this.$page.pid, this.$page.id)
        .pages
        .filter(page => page.frontmatter.layout === "Post")
        .map(page => {
          return {
            key: page.key,
            title: page.frontmatter.title,
            path: page.path,
            description: page.frontmatter.description,
            image: page.frontmatter.image ? this.$withBase(page.frontmatter.image) : '',
            date: page.frontmatter.date,
          }
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
  },
}
</script>

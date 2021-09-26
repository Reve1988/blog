<template>
  <div>
    <div class="navigation-height"></div>
    <nav class="navigation">
      <b-container>
        <b-row class="navigation-height flex-between">
          <div
              class="navigation-item navigation-title"
              @click="moveToHome">
            Blog Title
          </div>
          <b-dropdown
              text="Category"
              right
              size="sm"
              variant="outline-primary"
              class="navigation-item navigation-right">
            <b-dropdown-item
                v-for="category in categories"
                :href="category.path">
              {{ category.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-row>
      </b-container>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    this.categories = this.getCategories(this.$site.pages);
  },
  methods: {
    getCategories(pages) {
      return pages
          .filter(page => page.frontmatter.layout === "CategoryIndex")
          .map(page => {
            return {
              name: page.frontmatter.title,
              path: this.$withBase(page.path),
            }
          });
    },
    moveToHome() {
      location.href = this.$withBase("/");
    },
  }
}
</script>

<style>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #8c8c8c;
}

.navigation-title {
  line-height: 1.5rem;
  font-size: 1.2em;
  font-weight: bold;
  color: #3d3d3d;
  cursor: pointer;
}

.navigation-height {
  height: 4rem;
}

.navigation-item {
  padding-left: 1rem;
  padding-right: 1rem;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
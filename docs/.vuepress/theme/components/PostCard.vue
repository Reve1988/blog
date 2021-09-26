<template>
  <div>
    <div class="post-card-box">
      <b-card
          v-for="(post, index) in displayPosts"
          no-body
          class="card overflow-hidden"
          :class="{'margin-bottom-0': index === (displayPosts.length - 1)}"
          @click="goToPost(post.path)">
        <b-row no-gutters>
          <b-col
              v-if="post.image"
              md="3"
              class="card-img-box">
            <b-card-img
                :src="post.image"
                alt="Post image"
                class="card-img"/>
          </b-col>
          <b-col :md="post.image ? 9 : 12">
            <b-card-body :title="post.title">
              <b-card-text>
                {{ post.description }}<br/>
                {{ post.date }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="more-row" v-if="showMoreButton">
      <b-button @click="displayMorePosts">More..</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard.vue",
  props: {
    pages: [],
  },
  data() {
    return {
      posts: [],
      displayPosts: [],
      perPage: 5,
    }
  },
  computed: {
    showMoreButton() {
      return this.displayPosts.length < this.posts.length;
    }
  },
  mounted() {
    this.posts = this.getPosts();
    this.displayMorePosts();
  },
  methods: {
    getPosts() {
      return this.pages
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
    goToPost(path) {
      location.href = this.$withBase(path);
    },
    displayMorePosts() {
      let displayPostIndex = this.displayPosts.length;

      for (let index = displayPostIndex; index < displayPostIndex + this.perPage; index++) {
        if (this.displayPosts.length >= this.posts.length) {
          return;
        }

        this.displayPosts.push(this.posts[index]);
      }
    }
  }
}
</script>

<style scoped>
.post-card-box {
  width: 100%;
}

.card-box {
  width: 100%;
}

.card {
  margin-bottom: 1rem;
  padding: 0;
  cursor: pointer;
}

.margin-bottom-0 {
  margin-bottom: 0;
}

.card-img-box {
  width: 100%;
  height: 10rem;
  padding: 1rem;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.25rem;
}

@media (max-width: 768px) {
  .card-img-box {
    padding-bottom: 0;
  }
}

.more-row {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}
</style>
<template>
  <div class="post-pagination">
    <div class="post-pagination-title">
      <span class="category">{{ currentPost.id }}</span> 카테고리 내 다른 포스트
    </div>
    <b-container>
      <b-row
          v-for="post in displayPostList"
          class="post-list">
        <b-col>
          <a :href="$withBase(post.path)" :class="{'normal-post-title': post.key !== currentPost.key}">{{ post.title }}</a>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="row-center">
        <b-button
            variant="light"
            @click="movePreviousPage"
            :disabled="currentPage <= 1">
          < 이전
        </b-button>
        <b-button
            variant="light"
            @click="moveNextPage"
            :disabled="currentPage >= totalPage">
          다음 >
        </b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PostPagination",
  props: {
    postList: {
      type: Array,
      required: true,
    },
    currentPost: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      displayPostList: [],

      postCountPerPage: 5,
      currentPage: 0,
      totalPage: 0,
    }
  },
  watch: {
    postList() {
      this.initPostPagination();
    },
  },
  methods: {
    initPostPagination() {
      const currentPostIndex = this.getCurrentPostIndex();

      this.currentPage = Math.ceil((currentPostIndex + 1) / this.postCountPerPage);
      this.totalPage = Math.ceil(this.postList.length / this.postCountPerPage);

      this.displayPostList = this.getDisplayPostList(this.currentPage);
    },
    movePreviousPage() {
      this.currentPage = this.currentPage - 1;
      this.displayPostList = this.getDisplayPostList(this.currentPage);
    },
    moveNextPage() {
      this.currentPage = this.currentPage + 1;
      this.displayPostList = this.getDisplayPostList(this.currentPage);
    },
    getCurrentPostIndex() {
      return this.postList.findIndex(page => page.key === this.currentPost.key);
    },
    getDisplayPostList(page) {
      const startIndex = (page - 1) * this.postCountPerPage;
      const endIndex = startIndex + this.postCountPerPage;

      return this.postList.slice(startIndex, endIndex);
    },
  }
}
</script>

<style scoped>
.post-pagination {
  width: 100%;
  padding: 2rem 2rem 0;
}

.post-pagination-title {
  font-weight: bold;
  margin-bottom: 1rem;
  color: #949494;
}

.category {
  color: #007bff;
}

.post-pagination {
  font-weight: normal;
}

.post-list {
  width: 100%;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #cbcbcb;
}

.normal-post-title {
  font-weight: normal;
  color: #60b28d;
}

.row-center {
  justify-content: center;
}
</style>

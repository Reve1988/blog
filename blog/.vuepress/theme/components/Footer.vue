<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col>
          <img
              :src="$withBase('/svg/github-mark.svg')"
              alt="github"
              class="icon"
              @click="openNewTab('https://github.com/Reve1988')"/>
          <img
              :src="$withBase('/svg/naver-blog-mark.svg')"
              alt="github"
              class="icon"
              @click="openNewTab('https://blog.naver.com/kgw1988')"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>Copyrightⓒ2021 Revelope All rights reserved.</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    openNewTab(url) {
      window.open(url);
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 2rem 0;
  margin-top: 2rem;
  background-color: #323437;
  color: #cbcbcb;
  text-align: center;
}
</style>

<style scoped>
.icon {
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
}
</style>
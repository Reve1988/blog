<template>
  <div class="content-box">
    <h1>{{ $page.frontmatter.title }}</h1>
    <span>{{ $page.frontmatter.author }} - {{ $page.frontmatter.date }}</span>
    <hr/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Contents"
}
</script>

<style scoped>
.content-box {
  width: 100%;
  margin-top: -2rem;
  padding: 2rem;
  z-index: 2;
  border-radius: 0.25rem;
  background-color: #ffffff;
  box-shadow: 0 0 30px 5px #9f9f9f;
}

span {
  color: #999999;
  font-size: 14px;
}

hr {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>
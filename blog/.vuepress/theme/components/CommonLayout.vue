<template>
  <div class="layout">
    <b-container>
      <b-row>
        <navigation/>
      </b-row>
      <b-row>
        <cover/>
      </b-row>
      <b-row>
        <slot></slot>
      </b-row>
      <b-row>
        <slot name="bottom"></slot>
      </b-row>
    </b-container>
    <common-footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Cover from "./Cover";
import CommonFooter from "./Footer";

export default {
  name: "CommonLayout",
  components: {
    Navigation,
    Cover,
    CommonFooter,
  }
}
</script>

<style>
html, body {
  width: 100%;
}

#app {
  width: 100%;
  background-color: #f7f7f7;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout > .container {
  flex: 1 0 auto;
}
</style>
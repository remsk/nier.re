<template>
  <div class="home">
    <img class="mama" alt="Vue logo" src="../assets/logo.png" />
    <!-- <img class="news" alt="news" src="../assets/news.png" /> -->
    <HelloWorld msg="Welcome to NieR Re［in］formation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 0 auto;
  width: 90%;
  height: auto;

  &.mama {
    max-width: 94px;
    max-height: 122px;
  }

  &.news {
    max-width: 591px;
    max-height: 317px;
  }
}
</style>

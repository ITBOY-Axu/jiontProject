<template>
  <div id="app">
    <router-view />
    <layout />
  </div>
</template>
  <script>
import layout from "@/layout";

export default {
  components: {
    layout
  },
  mounted() {

  },
};
</script>
<style lang="scss">
@import "assets/stylesheet/reset.scss";
</style>

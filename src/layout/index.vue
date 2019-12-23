<template>
  <div>
    <tab />
    <tabBar />
  </div>
</template>
<script>
import tab from "components/tab/tab.vue";
import tabBar from "components/tabBar/tabBar.vue";
import axios from "axios";
export default {
  components: {
    tab,
    tabBar
  },
   mounted() {

  }
};
</script>
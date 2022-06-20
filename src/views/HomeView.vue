<template>
  <div class="home">
    <Header></Header>
    <Count></Count>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Count from "../components/count.vue";
import { reactive, watch, provide } from "vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Count,
  },
  setup() {
    const obj = reactive({
      pmFlag: false,
      name: "",
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["1"],
      // preOpenKeys: ["sub1"],
    });
    provide("obj", obj);
    // watch(obj, (_val, oldVal) => {
    //   obj.preOpenKeys = oldVal;
    // });
    return {};
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
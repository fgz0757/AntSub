<template>
  <div class="title">
    <BranchesOutlined :style="{ fontSize: '16px' }" />
    <p>Echart 图表</p>
  </div>
  <div class="count">
    <div class="box">
      <h2>柱状图</h2>
      <div id="echart1"></div>
    </div>
    <div class="box">
      <h2>折线图</h2>
      <div id="echart2"></div>
    </div>
    <div class="box">
      <h2>饼状图</h2>
      <div id="echart3"></div>
    </div>
    <div class="box">
      <h2>环形图</h2>
      <div id="echart4"></div>
    </div>
  </div>
</template>
<script>
import { BranchesOutlined } from "@ant-design/icons-vue";
import { onMounted } from "vue";
import Fn1 from "../hook/echart1";
import Fn2 from "../hook/echart2";
import Fn3 from "../hook/echart3";
import Fn4 from "../hook/echart4";
export default {
  components: { BranchesOutlined },
  setup() {
    onMounted(() => {
      Fn1(), Fn2(), Fn3(), Fn4();
    });
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.count {
  background: #fff;
  margin-top: 15px;
  padding: 30px;
  box-sizing: border-box;
  .box {
    margin-bottom: 30px;
    h2 {
      font-size: 24px;
    }
    div {
      width: 50%;
      height: 350px;
    }
  }
}
:--webkit--scrollbar {
  display: none;
}
</style>
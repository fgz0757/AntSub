<template>
  <div class="title">
    <LikeOutlined :style="{ fontSize: '16px' }" />
    <p>支持作者</p>
  </div>
  <div class="cont">
    <div>
      如果该框架对你有帮助，那就请作者喝杯饮料吧！加微信号linxin_20探讨问题。
    </div>
    <img src="../../public/ewm.jpg" alt="" />
  </div>
</template>
<script>
import { LikeOutlined } from "@ant-design/icons-vue";
export default {
  components: { LikeOutlined },
  setup() {},
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.cont {
  background: #fff;
  margin-top: 15px;
  padding: 30px;
  div {
    font-size: 16px;
    background: #eef1f6;
    padding: 30px 15px;
    margin-bottom: 20px;
  }
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
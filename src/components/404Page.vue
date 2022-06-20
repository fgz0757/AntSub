<template>
  <div class="title">
    <FileExcelOutlined :style="{ fontSize: '16px' }" />
    <p>错误处理 / 404页面</p>
  </div>
  <div class="box">
    <div class="content">
      <h2><span>4</span>0<span>4</span></h2>
      <p>啊哦~ 你没有权限访问该页面哦</p>
      <div>
        <a-button type="primary" @click="toHome">返回首页</a-button>
        <a-button type="primary" @click="toPrev">返回上一页</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import { FileExcelOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
export default {
  components: { FileExcelOutlined },
  setup() {
    const router = useRouter();
    function toHome() {
      router.push("/home");
    }
    function toPrev() {
      router.back();
    }
    return {
      toHome,
      toPrev,
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.box {
  margin-top: 15px;
  padding-top: 30px;
  .content {
    width: 50%;
    margin: 0 auto;
    h2 {
      font-size: 300px;
      line-height: 300px;
      font-weight: 700;
      color: #00a854;
      span {
        color: #2d8cf0;
      }
    }
    p {
      font-size: 40px;
      line-height: 50px;
      color: #999;
    }
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
    }
  }
}
</style>
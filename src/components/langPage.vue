<template>
  <div class="title">
    <DingdingOutlined :style="{ fontSize: '16px' }" />
    <p>国际化功能</p>
  </div>
  <div class="cont">
    <div>
      <p>{{ $t("title") }}</p>
      <a-button type="primary" @click="changeLang">{{ $t("btn") }}</a-button>
    </div>
    <h2>{{ $t("h1") }}</h2>
    <p>{{ $t("p1") }}</p>
    <p>{{ $t("p2") }}</p>
    <p>{{ $t("p3") }}</p>
    <h2>{{ $t("h2") }}</h2>
    <p>
      {{ $t("p4")
      }}<a href="https://blog.csdn.net/arrizo/article/details/119003116">{{
        $t("text")
      }}</a>
    </p>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import { DingdingOutlined } from "@ant-design/icons-vue";

export default {
  components: { DingdingOutlined },
  setup() {
    const { locale } = useI18n();
    function changeLang() {
      locale.value = locale.value == "zh" ? "en" : "zh";
    }
    return {
      changeLang,
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
.cont {
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  margin-top: 15px;
  font-size: 16px;
  div {
    display: flex;
    align-items: center;
    p {
      margin-right: 15px;
    }
  }
  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-top: 15px;
  }
  & > p {
    margin-top: 15px;
    a {
      color: #409eff;
      margin-left: 10px;
    }
  }
}
</style>
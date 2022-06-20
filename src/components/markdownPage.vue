<template>
  <div class="title">
    <SolutionOutlined :style="{ fontSize: '16px' }" />
    <p>表单 / MarkDown编辑器</p>
  </div>
  <div class="mount">
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>
<script>
import { SolutionOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
export default {
  components: { SolutionOutlined },
  setup() {
    const markdown = ref("");
    return {
      markdown,
    };
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font: 16px;
}
.mount {
  padding: 30px;
  background: #fff;
  margin-top: 15px;
}
</style>
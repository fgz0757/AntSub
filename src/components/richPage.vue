<template>
  <div class="title">
    <SolutionOutlined :style="{ fontSize: '16px' }" />
    <p>表单 / 富文本编辑器</p>
  </div>
  <div class="mount">
    <vue3-tinymce v-model="state.content" :setting="state.setting" />
  </div>
</template>
<script>
import { SolutionOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
export default {
  components: { SolutionOutlined },
  setup() {
    const state = reactive({
      content: "hello vue3-tinymce!",
      // editor 配置项
      setting: {
        height: 400, // editor 高度

        toolbar:
          "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar:
          "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: "link image media table lists fullscreen quickbars",
        fontsize_formats: "12px 14px 16px 18px",
        default_link_target: "_blank",
        link_title: false,
        nonbreaking_force_tab: true,
        // 以中文简体为例
        language: "zh_CN",
        language_url:
          "https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js",
      },
    });
    return {
      state,
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
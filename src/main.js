import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import store from "./store";
//引入清除默认样式文件
import "../public/reset.css";
//富文本编辑器
import Vue3Tinymce from "@jsdawn/vue3-tinymce";
//mackdown 编辑器
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
//引入element-ui的样式
import 'element-plus/dist/index.css'
VMdEditor.use(githubTheme);
//引入国际化功能组件
import I18n from "./i18n/index.js";

createApp(App).use(I18n).use(VMdEditor).use(Vue3Tinymce).use(Antd).use(store).use(router).mount("#app");

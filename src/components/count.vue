<template>
  <div class="count">
    <div :class="!collapsed ? 'color left' : 'left'">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        class="box"
        @click="pageFn"
      >
        <a-menu-item key="1">
          <template #icon>
            <BarsOutlined />
          </template>
          <span>系统首页</span>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <TableOutlined />
          </template>
          <span>基础表格</span>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <SwitcherOutlined />
          </template>
          <span>tab选项卡</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <SolutionOutlined />
          </template>
          <template #title>表单相关</template>
          <a-menu-item key="5">基本表单</a-menu-item>
          <a-sub-menu key="sub3" title="三级菜单">
            <a-menu-item key="6">富文本编辑器</a-menu-item>
            <a-menu-item key="7">MackDown 编辑器</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="8">文件上传</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <template #icon>
            <SlackOutlined />
          </template>
          <span>自定义图标</span>
        </a-menu-item>
        <a-menu-item key="10">
          <template #icon>
            <BranchesOutlined />
          </template>
          <span>Echart 图表</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <template #icon>
            <RocketOutlined />
          </template>
          <template #title>拖拽组件</template>
          <a-menu-item key="11">拖拽列表</a-menu-item>
          <a-menu-item key="12">拖拽弹框</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="13">
          <template #icon>
            <DingdingOutlined />
          </template>
          <span>国际化功能</span>
        </a-menu-item>
        <a-sub-menu key="sub3">
          <template #icon>
            <FileExcelOutlined />
          </template>
          <template #title>错误处理</template>
          <a-menu-item key="14">权限测试</a-menu-item>
          <a-menu-item key="15">404页面</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="16">
          <template #icon>
            <LikeOutlined />
          </template>
          <span>支持作者</span>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="right"><router-view /></div>
  </div>
</template>
<script>
import { toRefs, inject } from "vue";
import { useRouter } from "vue-router";
//图标库引入图标
import {
  BarsOutlined,
  TableOutlined,
  SwitcherOutlined,
  SolutionOutlined,
  SlackOutlined,
  BranchesOutlined,
  RocketOutlined,
  DingdingOutlined,
  FileExcelOutlined,
  LikeOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "Count",
  components: {
    BarsOutlined,
    TableOutlined,
    SwitcherOutlined,
    SolutionOutlined,
    SlackOutlined,
    BranchesOutlined,
    RocketOutlined,
    DingdingOutlined,
    FileExcelOutlined,
    LikeOutlined,
  },
  setup() {
    let obj = inject("obj");
    const router = useRouter();
    function pageFn({ item, key, keypath }) {
      router.push(key);
    }
    return {
      ...toRefs(obj),
      pageFn,
    };
  },
};
</script>
<style lang="less" scoped>
.count {
  display: flex;
  .left {
    height: calc(100vh - 50px);
    overflow: auto;
    .box {
      height: 100%;
    }
  }
  .color {
    width: 180px;
    background: #001529;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .right {
    height: calc(100vh - 50px);
    flex: 1;
    background: #f0f0f0;
    padding: 7px;
    overflow: scroll;
  }
}
</style>
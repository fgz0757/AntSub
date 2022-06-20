<template>
  <div class="header">
    <div class="lf">
      <div @click="toggleCollapsed">
        <menu-fold-outlined :style="{ fontSize: '20px' }" v-if="!collapsed" />
        <menu-unfold-outlined :style="{ fontSize: '20px' }" v-else />
      </div>
      <div class="txt">后台管理系统</div>
    </div>
    <div class="rt">
      <div @click="qpFn">
        <fullscreen-outlined :style="{ fontSize: '20px' }" v-if="!pmFlag" />
        <fullscreen-exit-outlined :style="{ fontSize: '20px' }" v-else />
      </div>
      <div><bell-outlined :style="{ fontSize: '20px' }" /></div>
      <div><img src="../../public/img3.webp" alt="" /></div>
      <div class="user">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            {{ name }}
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">项目仓库</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="closeFn">退出登录</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import screenfull from "screenfull";
import { onMounted, toRefs, inject } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    BellOutlined,
  },

  name: "Header",
  setup() {
    let obj = inject("obj");
    const route = useRoute();
    onMounted(() => {
      obj.name = route.query.userName;
    });
    function qpFn() {
      obj.pmFlag = !obj.pmFlag;
      if (screenfull.isEnabled) {
        screenfull.toggle();
      }
    }
    const router = useRouter();
    function closeFn() {
      router.push("/");
      localStorage.removeItem("token");
    }

    function toggleCollapsed() {
      console.log(obj.collapsed);
      obj.collapsed = !obj.collapsed;
      console.log(obj.collapsed);
      // obj.openKeys = obj.collapsed ? [] : obj.preOpenKeys;
    }
    return {
      ...toRefs(obj),
      qpFn,
      closeFn,
      toggleCollapsed,
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  background: #001529;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  .lf,
  .rt {
    display: flex;
    align-items: center;
    .txt {
      margin-left: 10px;
      font-weight: 700;
    }
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .user {
      width: 80px;
    }
  }
  .rt > div {
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>
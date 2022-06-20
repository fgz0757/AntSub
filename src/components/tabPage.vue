<template>
  <div class="title">
    <SwitcherOutlined :style="{ fontSize: '16px' }" />
    <p>tab选项卡</p>
  </div>
  <div class="box">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="未读消息">
        <div class="unread">
          <div :key="el.id" v-for="el in data.unread">
            <p>{{ el.text }}</p>
            <div>
              <span class="timer">{{ el.timer }}</span>
              <a-button @click="readFn(el.id)">标为已读</a-button>
            </div>
          </div>
        </div>
        <a-button type="primary" @click="allReadFn">全部标为已读</a-button>
      </a-tab-pane>
      <a-tab-pane key="2" tab="已读消息">
        <div class="read">
          <div :key="el.id" v-for="el in data.read">
            <p>{{ el.text }}</p>
            <div>
              <span class="timer">{{ el.timer }}</span>
              <a-button type="primary" danger @click="deleFn(el.id)"
                >删除</a-button
              >
            </div>
          </div>
        </div>
        <a-button type="primary" danger @click="deleAll">全部删除</a-button>
      </a-tab-pane>
      <a-tab-pane key="3" tab="回收站">
        <div class="dele">
          <div :key="el.id" v-for="el in data.dele">
            <p>{{ el.text }}</p>
            <div>
              <span class="timer">{{ el.timer }}</span>
              <a-button @click="restore(el.id)">还原</a-button>
            </div>
          </div>
        </div>
        <a-button type="primary" danger @click="clearFn">清空回收站</a-button>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { SwitcherOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs, onMounted } from "vue";
import instance from "../api/index";
export default {
  components: { SwitcherOutlined },
  setup() {
    const obj = reactive({
      activeKey: "1",
      data: {},
    });
    onMounted(() => {
      getCon();
    });
    //获取数据
    async function getCon() {
      let { data } = await instance.get("/api/tabs");
      obj.data = data.data;
    }
    //单条数据标为已读
    function readFn(id) {
      instance.post("/api/read", { id: id });
      getCon();
    }
    //全部标为已读
    async function allReadFn() {
      let { data } = await instance.post("/api/allRead");
      console.log(data.data);
      getCon();
    }
    //删除单条数据
    function deleFn(id) {
      instance.post("/api/tabDele", { id: id });
      getCon();
    }
    //删除全部数据
    function deleAll() {
      instance.post("/api/tabDeleAll");
      getCon();
    }
    //还原某条数据
    function restore(id) {
      instance.post("/api/restore", { id: id });
      getCon();
    }
    //清空回收站
    function clearFn() {
      instance.post("/api/clear");
      getCon();
    }
    return {
      ...toRefs(obj),
      readFn,
      allReadFn,
      deleFn,
      deleAll,
      restore,
      clearFn,
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
  background: #fff;
  padding: 30px;
  margin-top: 15px;
  .unread,
  .read,
  .dele {
    margin-bottom: 15px;
    & > div {
      height: 60px;
      padding: 0 20px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #409eff;
      }
      .timer {
        margin-right: 15px;
      }
    }
  }
}
</style>
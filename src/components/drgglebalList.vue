<template>
  <div class="title">
    <RocketOutlined :style="{ fontSize: '16px' }" />
    <p>拖拽组件 / 拖拽列表</p>
  </div>
  <div class="cont">
    <div>
      <draggable
        v-model="myArray1"
        group="people"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="box box1">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div class="mar">
      <draggable
        v-model="myArray2"
        group="people"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="box box2">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div>
      <draggable
        v-model="myArray3"
        group="people"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="box box3">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script>
import { RocketOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
import draggable from "vuedraggable";
export default {
  components: { RocketOutlined, draggable },
  setup() {
    const data = reactive({
      drag: false,
      myArray1: [
        { id: 1, name: "吉恩" },
        { id: 2, name: "珍妮" },
        { id: 3, name: "丽丽" },
      ],
      myArray2: [
        { id: 1, name: "小明" },
        { id: 2, name: "小慧" },
        { id: 3, name: "小亮" },
      ],
      myArray3: [
        { id: 1, name: "徐峰" },
        { id: 2, name: "陈青" },
        { id: 3, name: "诸葛射日" },
      ],
    });
    return { ...toRefs(data) };
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
  margin-top: 15px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  & > div {
    flex: 1;
    overflow: scroll;
    height: 350px;
    border: 1px solid #000;
    text-align: center;
    font-size: 16px;
    .box {
      border-radius: 5px;
      width: 80%;
      margin: 15px auto;
    }
    .box1 {
      border: 1px solid #c00000;
    }
    .box2 {
      border: 1px solid #1890ff;
    }
    .box3 {
      border: 1px solid #18aa44;
    }
  }
  .mar {
    margin: 0 15px;
  }
}
</style>
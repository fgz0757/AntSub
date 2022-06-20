<template>
  <div class="title">
    <RocketOutlined :style="{ fontSize: '16px' }" />
    <p>拖拽组件 / 拖拽弹框</p>
  </div>
  <div class="cont">
    <el-button type="primary" @click="dialogVisible = true"
      >点击按钮弹框
    </el-button>

    <el-dialog v-model="dialogVisible" title="弹框可拖拽" width="30%" draggable>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { RocketOutlined } from "@ant-design/icons-vue";
import { ElButton, ElDialog } from "element-plus";
import { ref } from "vue";
export default {
  components: { RocketOutlined, ElButton, ElDialog },
  setup() {
    let dialogVisible = ref(false);
    return {
      dialogVisible,
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
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 15px;
}
</style>
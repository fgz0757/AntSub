<template>
  <div class="title">
    <SolutionOutlined :style="{ fontSize: '16px' }" />
    <p>表单 / 基本表单</p>
  </div>
  <div class="count">
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="用户名">
        <a-input v-model:value="name" style="width: 35%" />
      </a-form-item>
      <a-form-item label="选择开关">
        <a-switch v-model:checked="delivery" />
      </a-form-item>
      <a-form-item label="多选类型">
        <a-checkbox-group v-model:value="type">
          <a-checkbox value="1" name="type">看书</a-checkbox>
          <a-checkbox value="2" name="type">唱歌</a-checkbox>
          <a-checkbox value="3" name="type">旅游</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="单选类型">
        <a-radio-group v-model:value="resource">
          <a-radio value="1">男</a-radio>
          <a-radio value="2">女</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="文本编辑框">
        <a-input v-model:value="desc" type="textarea" style="width: 35%" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">提交</a-button>
        <a-button style="margin-left: 10px">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { SolutionOutlined } from "@ant-design/icons-vue";
import { toRefs, reactive } from "vue";
export default {
  components: { SolutionOutlined },
  setup() {
    const formState = reactive({
      name: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });
    function onSubmit() {
      console.log("提交数据");
    }
    return {
      formState,
      ...toRefs(formState),
      onSubmit,
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
.count {
  background: #fff;
  padding: 30px 0 50px 50px;
  margin-top: 15px;
}
</style>
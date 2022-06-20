<template>
  <div class="dv">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, max: 10, min: 6, message: '请输入用户名!' }]"
      >
        <a-input v-model:value="username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, max: 10, min: 6, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value="password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="remember">记住用户名、密码</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" @click="submitFn"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
  <img src="../../public/bac.webp" />
</template>
<script>
import { message } from "ant-design-vue";
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import instance from "../api/index";
import subPage from "../hook/fDou";
export default {
  setup() {
    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });
    const router = useRouter();

    let submitFn = subPage(subFn, 1500);

    async function subFn() {
      let { data } = await instance.post("/api/shuj", {
        name: formState.username,
        psd: formState.password,
      });
      if (data.message == "请求成功") {
        message.success("登陆成功", [3], () => {
          localStorage.setItem("token", formState.username);
          router.push({
            path: "/home",
            query: { userName: formState.username },
          });
        });
      }
    }
    return {
      formState,
      ...toRefs(formState),
      submitFn,
    };
  },
};
</script>
<style lang="less" scoped>
.dv {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
}
img {
  width: 100%;
  height: 100%;
}
</style>
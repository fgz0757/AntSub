<template>
  <div class="title">
    <TableOutlined :style="{ fontSize: '16px' }" />
    <span>基础表格</span>
  </div>
  <div class="tableCont">
    <div class="tableTop">
      <a-button type="primary" @click="deleAll">
        <template #icon><close-circle-outlined /></template>
        删除全部选中
      </a-button>
      <a-input
        v-model:value="value"
        placeholder="请输入查找需要的用户"
        class="input"
        @change="inputFn"
      />
    </div>
    <a-table
      rowKey="id"
      :row-selection="rowSelection"
      :columns="columns"
      :data-source="data"
      :custom-row="customRow"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'src'">
          <img style="width: 30px; heigth: 30px" :src="record.src" />
        </template>
        <template v-if="column.dataIndex === 'state'">
          <div :class="record.state == '成功' ? 'color1' : 'color2'">
            {{ record.state }}
          </div>
        </template>
        <template v-if="column.dataIndex === 'operator'">
          <span style="color: red" @click="redact(record.id)">编辑</span>
          <span
            style="margin-left: 15px; color: blue"
            @click="deleFn(record.id)"
            >删除</span
          >
        </template>
      </template>
    </a-table>
  </div>
  <!-- 编辑的对话框 -->
  <a-modal
    v-model:visible="visible"
    title="修改内容进行提交"
    cancelText="取消"
    okText="确定"
    @ok="handleOk"
  >
    <div>
      <span>用户名: </span>
      <a-input v-model:value="userValue" />
    </div>
    <div style="margin-top: 10px">
      <span>地址: </span>
      <a-input v-model:value="addressValue" />
    </div>
  </a-modal>
  <!-- 展示筛选查找的数据 -->
  <a-modal v-model:visible="show" cancelText="取消" okText="确定" @ok="yesFn">
    <div :key="el.id" v-for="el in arrs" class="getBox">
      <sapn>{{ el.user }}</sapn>
      <sapn>{{ el.price }}</sapn>
      <img :src="el.src" alt="" />
      <sapn>{{ el.address }}</sapn>
    </div>
  </a-modal>
</template>
<script>
import { TableOutlined, CloseCircleOutlined } from "@ant-design/icons-vue";
import { onMounted, reactive, toRefs, computed } from "vue";
import instance from "../api/index";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "user",
  },
  {
    title: "账户余额",
    dataIndex: "price",
  },
  {
    title: "头像",
    dataIndex: "src",
  },
  {
    title: "地址",
    dataIndex: "address",
  },
  {
    title: "状态",
    dataIndex: "state",
  },
  {
    title: "注册时间",
    dataIndex: "time",
  },
  {
    title: "操作",
    dataIndex: "operator",
  },
];
export default {
  components: { TableOutlined, CloseCircleOutlined },
  setup() {
    let obj = reactive({
      data: [],
      selectedRowKeys: [],
      value: "",
      visible: false,
      userValue: "",
      addressValue: "",
      id: null,
      arrs: [],
      show: false,
    });
    onMounted(() => {
      getCon();
    });
    async function getCon() {
      let { data } = await instance.get("/api/tables");
      obj.data = data.data;
    }
    const selectRow = (record) => {
      const selectedRowKeys = [...obj.selectedRowKeys];
      if (selectedRowKeys.indexOf(record.key) >= 0) {
        selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
      } else {
        selectedRowKeys.push(record.key);
      }
      obj.selectedRowKeys = selectedRowKeys;
    };
    const rowSelection = computed(() => {
      return {
        selectedRowKeys: obj.selectedRowKeys,
        onChange: (selectedRowKeys) => {
          obj.selectedRowKeys = selectedRowKeys;
        },
      };
    });
    const customRow = (record) => {
      return {
        onClick: () => {
          selectRow(record);
        },
      };
    };
    //编辑内容
    function redact(id) {
      obj.visible = true;
      const el = obj.data.find((el) => el.id == id);
      obj.userValue = el.user;
      obj.addressValue = el.address;
      obj.id = id;
    }
    //编辑后点击提交
    function handleOk() {
      instance.post("/api/addTable", {
        id: obj.id,
        name: obj.userValue,
        address: obj.addressValue,
      });
      obj.visible = false;
      obj.id = "";
      getCon();
    }
    //删除某一条数据
    function deleFn(id) {
      instance.post("/api/deleTable", { id: id });
      getCon();
    }
    //删除多条数据
    function deleAll() {
      instance.post("/api/deleAll", { arr: obj.selectedRowKeys });
      getCon();
    }
    //查找符合条件的数据
    function inputFn() {
      let arrs = obj.data.filter((el) => el.user.indexOf(obj.value) != -1);
      obj.arrs = arrs;
      obj.show = true;
    }
    function yesFn() {
      obj.show = false;
    }
    return {
      ...toRefs(obj),
      columns,
      rowSelection,
      customRow,
      redact,
      handleOk,
      deleFn,
      deleAll,
      inputFn,
      yesFn,
    };
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
}
.tableTop {
  margin-bottom: 10px;
  display: flex;
  .input {
    width: 180px;
    margin-left: 15px;
  }
}
.color1,
.color2 {
  height: 24px;
  width: 50%;
  text-align: center;
  line-height: 24px;
  border-radius: 3px;
}
.color1 {
  border: 1px solid green;
  color: green;
}
.color2 {
  border: 1px solid red;
  color: red;
}
.getBox {
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  img {
    width: 35px;
    height: 35px;
  }
}
</style>
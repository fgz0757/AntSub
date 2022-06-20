<template>
  <div class="title">
    <SolutionOutlined :style="{ fontSize: '16px' }" />
    <p>表单 / 图片上传</p>
  </div>
  <div class="count">
    <div>
      <div class="clearfix">
        <a-upload
          v-model:file-list="fileList"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          list-type="picture-card"
          @preview="handlePreview"
        >
          <div v-if="fileList.length < 8">
            <plus-outlined />
            <div style="margin-top: 8px">上传</div>
          </div>
        </a-upload>
        <a-modal
          :visible="previewVisible"
          :title="previewTitle"
          :footer="null"
          @cancel="handleCancel"
        >
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </div>
    </div>
    <div style="margin-top: 45px">
      <div>
        <a-upload
          v-model:file-list="fileList1"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          list-type="picture"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            点击按钮上传
          </a-button>
        </a-upload>
      </div>
    </div>
  </div>
</template>
<script>
import { SolutionOutlined } from "@ant-design/icons-vue";
import { toRefs, reactive } from "vue";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
}
export default {
  components: {
    SolutionOutlined,
  },
  setup() {
    const obj = reactive({
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-3",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-4",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-xxx",
          percent: 50,
          name: "image.png",
          status: "uploading",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-5",
          name: "image.png",
          status: "error",
        },
      ],
      fileList1: [
        {
          uid: "-1",
          name: "xxx.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          thumbUrl:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "yyy.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          thumbUrl:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
    });

    const handleCancel = () => {
      obj.previewVisible = false;
      obj.previewTitle = "";
    };

    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      obj.previewImage = file.url || file.preview;
      obj.previewVisible = true;
      obj.previewTitle =
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
    };

    return {
      ...toRefs(obj),
      handleCancel,
      handlePreview,
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
  padding: 60px;
  background: #fff;
  margin-top: 15px;
  display: flex;
  align-items: center;
  & > div {
    flex: 1;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
</style>
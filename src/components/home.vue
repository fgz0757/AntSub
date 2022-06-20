<template>
  <div class="box">
    <div class="top">
      <div class="fl">
        <div class="user bac">
          <div class="userMessage">
            <img src="../../public/img3.webp" alt="" />
            <div>
              <h3>{{ name }}</h3>
              <span>普通用户</span>
            </div>
          </div>
          <div class="subMessage">
            <p>
              <span>上次登陆时间:</span>
              <span>2022-06-08</span>
            </p>
            <p>
              <span>上次登录地址:</span>
              <span>成都</span>
            </p>
          </div>
        </div>
        <div class="lang bac">
          <div class="langTitle">语言详情</div>
          <div class="langProgress">
            <div>
              <p>Vue</p>
              <a-progress :percent="71.3" strokeColor="#42B983" />
            </div>
            <div>
              <p>JavaScript</p>
              <a-progress :percent="24.1" strokeColor="#F1E05A" />
            </div>
            <div>
              <p>CSS</p>
              <a-progress :percent="13.7" />
            </div>
            <div>
              <p>HTML</p>
              <a-progress :percent="5.9" strokeColor="#F56C6C" />
            </div>
          </div>
        </div>
      </div>
      <div class="rt">
        <div class="message">
          <div>
            <div style="background: #1890ff">
              <user-outlined :style="{ fontSize: '50px', color: '#fff' }" />
            </div>
            <div class="bac">
              <h2 style="color: #1890ff">1234</h2>
              <p>用户访问量</p>
            </div>
          </div>
          <div class="cen">
            <div style="background: #42b983">
              <message-outlined :style="{ fontSize: '50px', color: '#fff' }" />
            </div>
            <div class="bac">
              <h2 style="color: #1890ff">321</h2>
              <p>系统消息</p>
            </div>
          </div>
          <div>
            <div style="background: #f56c6c">
              <laptop-outlined :style="{ fontSize: '50px', color: '#fff' }" />
            </div>
            <div class="bac">
              <h2 style="color: #f56c6c">5000</h2>
              <p>数量</p>
            </div>
          </div>
        </div>
        <div class="backlog bac">
          <div class="backlogTitle">
            <span>待办事项</span>
            <span class="add" @click="addFn">添加</span>
          </div>
          <div class="backlogCont">
            <div class="list">
              <div :key="el.id" v-for="el in arr">
                <div>
                  <a-checkbox v-model:checked="el.check" />
                  <p :class="el.check ? 'line' : ''">{{ el.text }}</p>
                </div>
                <close-circle-outlined @click="deleFn(el.id)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <h2>最近一周各品类销售图</h2>
        <div id="histogram"></div>
      </div>
      <div>
        <h2>最近几个月各品类销售趋势图</h2>
        <div id="line"></div>
      </div>
    </div>
  </div>
  <a-modal
    v-model:visible="visible"
    title="添加数据"
    okText="确定"
    cancelText="取消"
    @cancel="cancelFn"
    @ok="handleOk"
  >
    <a-input v-model:value="value" placeholder="请输入内容" />
  </a-modal>
</template>
<script>
import { inject, toRefs, reactive, onMounted } from "vue";
import instance from "../api/index";
import {
  UserOutlined,
  MessageOutlined,
  LaptopOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons-vue";
import * as echarts from "echarts";
export default {
  components: {
    UserOutlined,
    MessageOutlined,
    LaptopOutlined,
    CloseCircleOutlined,
  },
  setup() {
    const obj = inject("obj");
    onMounted(() => {
      getCon();
      histogramFn();
      lineFn();
    });
    const newObj = reactive({
      arr: [],
      visible: false,
      value: "",
    });
    //获取后台数据
    async function getCon() {
      let { data } = await instance.get("/api/count");
      newObj.arr = data.data;
    }
    //点击添加按钮
    function addFn() {
      newObj.visible = true;
    }
    //点击添加内容后的确定按钮，清空输入框
    function cancelFn() {
      newObj.value = "";
    }
    //成功的回调函数，添加数据
    function handleOk() {
      instance.post("/api/addPost", { val: newObj.value });
      newObj.visible = false;
      newObj.value = "";
      getCon();
    }
    //删除数据
    function deleFn(n) {
      instance.post("/api/dele", { id: n });
      getCon();
    }
    //绘制柱状图
    function histogramFn() {
      let myChart = echarts.init(document.getElementById("histogram"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["家电", "百货", "食品"],
        },
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['周一', '周二', '周三', '周四', '周五',],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "家电",
            type: "bar",
            data: [234, 278, 270, 190, 230],
          },
          {
            name: "百货",
            type: "bar",
            data: [164, 178, 190, 135, 160],
          },
          {
            name: "食品",
            type: "bar",
            data: [144, 198, 150, 235, 120],
          },
        ],
      });
    }
    //绘制折线图
    function lineFn() {
      let myChart = echarts.init(document.getElementById("line"));
      myChart.setOption({
        legend: {
          data: ["家电", "百货", "食品"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["6月", "7月", "8月", "9月", "10月"],
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 300,
          splitNumber: 6,
        },
        series: [
          {
            name: "家电",
            type: "line",
            data: [74, 118, 200, 235, 90],
          },
          {
            name: "百货",
            type: "line",
            data: [164, 178, 150, 135, 160],
          },
          {
            name: "食品",
            type: "line",
            data: [234, 278, 270, 190, 230],
          },
        ],
      });
    }
    return {
      ...toRefs(obj),
      ...toRefs(newObj),
      addFn,
      cancelFn,
      handleOk,
      deleFn,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: auto;
  .top {
    height: 528px;
    display: flex;
    justify-content: space-between;
    .fl {
      width: 402px;
      .user {
        height: 252px;
        padding: 15px;
        box-sizing: border-box;
        .userMessage {
          border-bottom: 1px solid #000;
          padding: 15px 0;
          box-sizing: border-box;
          display: flex;
          img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
          }
          div {
            margin-left: 35px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h3 {
              font-size: 30px;
              font-weight: 700;
            }
            span {
              font-size: 14px;
              color: #999;
            }
          }
        }
        .subMessage {
          padding-top: 15px;
          p {
            font-size: 14px;
            color: #ccc;
            display: flex;
            span {
              flex: 1;
            }
          }
        }
      }
      .lang {
        height: 254px;
        & > div {
          padding: 0 15px;
        }
        .langTitle {
          font-size: 14px;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #000;
        }
        .langProgress {
          padding-top: 10px;
          & > div {
            padding-right: 15px;
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    .rt {
      flex: 1;
      margin-left: 20px;
      .message {
        height: 100px;
        display: flex;
        .cen {
          margin: 0 15px;
        }
        & > div {
          flex: 1;
          display: flex;
          & > div:first-child {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & > div:last-child {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2 {
              font-size: 30px;
            }
            p {
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
      .backlog {
        height: 403px;
        .backlogTitle {
          height: 60px;
          padding: 0 15px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #000;
          font-size: 16px;
          .add {
            font-size: 13px;
            color: blue;
          }
        }
        .backlogCont {
          height: 343px;
          padding: 15px 20px;
          box-sizing: border-box;
          overflow: scroll;
          .list > div {
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #999;
            & > div {
              display: flex;
              p {
                margin-left: 30px;
              }
            }
          }
        }
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .bottom {
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    & > div {
      flex: 1;
      height: 100%;
      background: #fff;
      h2 {
        text-align: center;
        font-size: 22px;
        line-height: 60px;
        font-weight: 700;
      }
      & > div {
        height: calc(100% - 60px);
      }
    }
    & > div + div {
      margin-left: 20px;
    }
  }
  .bac {
    background: #fff;
  }
  .line {
    text-decoration: line-through;
    color: #666;
  }
  :--webkit--scrollbar {
    display: none;
  }
}
</style>
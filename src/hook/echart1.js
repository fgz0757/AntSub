import * as echarts from "echarts";
export default ()=>{
    let myChart = echarts.init(document.getElementById("echart1"));
    //解决二次跳转不渲染页面问题
    document.getElementById('echart1').setAttribute('_echarts_instance_', '')
      myChart.setOption({
        title: {
          text: "最近一周各品类销售图",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["家电", "百货", "食品"],
          show: true,
          top: "8%",
        },

        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['周一', '周二', '周三', '周四', '周五'],
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
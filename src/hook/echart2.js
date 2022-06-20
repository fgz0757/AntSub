import * as echarts from "echarts";
export default ()=>{
    let myChart = echarts.init(document.getElementById("echart2"));
    //解决二次跳转不渲染页面问题
    document.getElementById('echart2').setAttribute('_echarts_instance_', '');
      myChart.setOption({
        title: {
          text: "最近几个月各品类销售趋势图",
          left: "center",
        },
        legend: {
          data: ["家电", "百货", "食品"],
          show: true,
          top: "8%",
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
        },
        series: [
          {
            name: "家电",
            type: "line",
            data: [114, 138, 200, 235, 190],
          },
          {
            name: "百货",
            type: "line",
            data: [164, 178, 250, 135, 160],
          },
          {
            name: "食品",
            type: "line",
            data: [234, 278, 270, 190, 230],
          },
        ],
      });
}
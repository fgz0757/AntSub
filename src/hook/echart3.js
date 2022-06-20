import * as echarts from "echarts";
export default ()=>{
    let myChart = echarts.init(document.getElementById("echart3"));
    //解决二次跳转不渲染页面问题
    document.getElementById('echart3').setAttribute('_echarts_instance_', '');
      myChart.setOption({
        title: {
          text: "服装品类销售饼状图",
          left: "center",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 334, name: "T恤" },
              { value: 278, name: "牛子裤" },
              { value: 190, name: "连衣裙" },
              { value: 235, name: "毛衣" },
              { value: 260, name: "七分裤" },
              { value: 200, name: "短裤" },
              { value: 141, name: "羽绒服" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
}
import * as echarts from "echarts";
export default ()=>{
    let myChart = echarts.init(document.getElementById("echart4"));
    //解决二次跳转不渲染页面问题
    document.getElementById('echart4').setAttribute('_echarts_instance_', '');
      myChart.setOption({
        title: {
          text: "环形三等份",
          left: "center",
        },
        legend: {
          top: "7%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            data: [
              { value: 330, name: "vue" },
              { value: 330, name: "react" },
              { value: 330, name: "angular" },
            ],
          },
        ],
      });
}
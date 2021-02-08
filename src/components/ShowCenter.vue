<template>
  <div class="show_center">
    <h1>展示中心</h1>
    <a-button type="primary">
      Primary
    </a-button>
    <div ref="main" style="width: 600px;height:400px;"></div>

  </div>

</template>

<script>
export default {
  name: "ShowCenter",
  created() {
  },
  mounted() {
    var myChart = this.$echarts.init(this.$refs.main);
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

  }
}


</script>

<style scoped>

h1 {
  color: blue;
}
</style>

export const option = {
  backgroundColor: `rgba(255,255,255,0.2)`,
  title: {
    text: 'ECharts 柱状图',
    textStyle: {
      color: '#ffffff',
    },
  },
  textStyle: {
    color: '#ffffff',
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
  },
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}
var echarts = require('echarts/lib/echarts');
export const option = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  title: {
    text: '男性女性身高体重分布',
    subtext: '抽样调查来自: Heinz  2003',
    textStyle: {
      color: '#fff',
    }
  },
  grid: {
    left: '3%',
    right: '7%',
    bottom: '3%',
    containLabel: true
  },
  tooltip: {
    // trigger: 'axis',
    showDelay: 0,
    formatter: function (params) {
      if (params.value.length > 1) {
        return params.seriesName + ' :<br/>'
          + params.value[0] + 'cm '
          + params.value[1] + 'kg ';
      }
      else {
        return params.seriesName + ' :<br/>'
          + params.name + ' : '
          + params.value + 'kg ';
      }
    },
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1
      }
    }
  },
  toolbox: {
    feature: {
      dataZoom: {},
      brush: {
        type: ['rect', 'polygon', 'clear']
      }
    }
  },
  brush: {
  },
  legend: {
    data: ['女性', '男性'],
    left: 'center'
  },
  xAxis: [
    {
      type: 'value',
      scale: true,
      axisLabel: {
        formatter: '{value} cm'
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      axisLabel: {
        formatter: '{value} kg'
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#666'
        }
      }
    }
  ],
  series: [
    {
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: '#f0f',
        }
      },
      name: '女性',
      type: 'scatter',
      data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
      [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
      ],
      markArea: {
        silent: true,
        itemStyle: {
          normal: {
            // color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed'
          }
        },
        data: [[{
          name: '女性分布区间',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]]
      },
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        lineStyle: {
          normal: {
            type: 'solid'
          }
        },
        data: [
          { type: 'average', name: '平均值' },
          { xAxis: 160 }
        ]
      }
    },
    {
      name: '男性',
      // color: '#f0f',
      type: 'scatter',
      data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
      [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
      [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
      [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
      ],
      markArea: {
        silent: true,
        itemStyle: {
          normal: {
            // color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed',
          }
        },
        data: [[{
          name: '男性分布区间',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]]
      },
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        lineStyle: {
          normal: {
            type: 'solid'
          }
        },
        data: [
          { type: 'average', name: '平均值' },
          { xAxis: 170 }
        ]
      }
    }
  ]
};

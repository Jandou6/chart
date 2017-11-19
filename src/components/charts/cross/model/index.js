import axios from 'axios';
var echarts = require('echarts/lib/echarts');
import { Api_config } from '../../../../config';

export const option = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  title: {
    text: '股票价格分布',
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
    showDelay: 0,
    formatter: function (params) {
      if (params.value.length > 1) {
        return params.seriesName + ' :<br/>'
          + params.value[0] + '亿 '
          + params.value[1] + '%';
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
  brush: {
  },
  // legend: {
  //   data: ['女性', '男性'],
  //   left: 'center'
  // },
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
  // visualMap: [
  //   {
  //     left: 'right',
  //     top: '10%',
  //     dimension: 0,
  //     min: 0,
  //     max: 25,
  //     itemWidth: 30,
  //     itemHeight: 120,
  //     calculable: true,
  //     precision: 0.1,
  //     text: ['圆形大小：PM2.5'],
  //     textGap: 30,
  //     textStyle: {
  //       color: '#fff'
  //     },
  //     inRange: {
  //       symbolSize: [10, 70]
  //     },
  //     outOfRange: {
  //       symbolSize: [10, 70],
  //       color: ['rgba(255,255,255,.2)']
  //     },
  //     controller: {
  //       inRange: {
  //         color: ['#c23531']
  //       },
  //       outOfRange: {
  //         color: ['#444']
  //       }
  //     }
  //   }
  // ],
  series: [
    {
      name: '男性',
      // color: '#f0f',
      type: 'scatter',
      data: [[174.0, 65.6]],
      itemStyle: {
        normal: {
          color: '#B3E4A1'
        }
      },
    },
    {
      name: '男性2',
      type: 'scatter',
      data: [[194.0, 75.6]],
      itemStyle: {
        normal: {
          color: '#B3E4A1'
        }
      },
    }
  ]
};

export function get_data(success_fn) {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_cross_data}`;
  axios.post(url).then((res) => {
    const data = res.data;
    const stock_cross_data = [];
    
    if (!Array.isArray(data)) { return; }
    data.forEach((item, index) => {
      const debtToAssetsRatio = (parseFloat(item.debtToAssetsRatio) || 0) * 100;
      option.series[index] = {
        name: item.CompanyName,
        data: [[item.marketValue / 100000000, debtToAssetsRatio]],
        type: 'scatter',
        itemStyle: {
          normal: {
            color: '#B3E4A1'
          }
        },
      }
    });
    console.log(option);
    success_fn(option);
  })
}

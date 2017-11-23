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
  series: []
};

export function get_data(success_fn) {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_cross_data}`;
  fetch_data(url, undefined, success_fn);
}

export function get_local_data(name, success_fn) {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_local_cross_data}`;
  fetch_data(url, {name}, success_fn);
}

function fetch_data(url, body, success_fn) {
  option.series = [];
  axios.post(url, body).then((res) => {
    const data = res.data;
    const stock_cross_data = [];

    if (!Array.isArray(data)) { return; }
    data.forEach((item, index) => {
      const debtToAssetsRatio = (parseFloat(item.debtToAssetsRatio) || 0) * 100;
      const marketValue = item.marketValue / 100000000
      option.series[index] = {
        name: item.companyName,
        data: [[marketValue, debtToAssetsRatio]],
        type: 'scatter',
        itemStyle: {
          normal: {
            color: (body && body.name === item.companyName) ? '#f00' : '#B3E4A1',
          }
        },
      }
    });
    success_fn(option);
  })
}

export function change_company(name) {
  option.series.forEach((item) => {
    if (item.name === name) {
      item.itemStyle.normal.color = '#f00';
    } else {
      item.itemStyle.normal.color = '#B3E4A1';
    }
  });
  return option;
}



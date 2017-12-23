import axios from 'axios';
import { Api_config } from '../../../../config';
const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];

var dateList = data.map(function (item) {
  return item[0];
});
var valueList = data.map(function (item) {
  return item[1];
});

export const option = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  textStyle: {
    color: '#ffffff',
  },
  // legend: {
  //   data:['开盘价','收盘价'],
  //   textStyle: {
  //     color: '#fff',
  //     fontSize: 14
  //   },
  // },
  visualMap: [{
    show: false,
    type: 'continuous',
    seriesIndex: 0,
    min: 0,
    max: 400
  }],
  title: [{
    text: '折线图',
    textStyle: {
      color: '#ffffff',
    },
  }],
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [{
    data: dateList,
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  }],
  yAxis: [{
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  }],
  series: [
    {
      type: 'line',
      name: '开盘价',
      showSymbol: false,
      lineStyle: {
        normal: {
          color: '#f00'
        }
      }
    },
    {
      type: 'line',
      name: '收盘价',
      showSymbol: false,
      lineStyle: {
        normal: {
          color: '#00ff00'
        }
      }
  }]
};

export function get_data(stock_name='盛通股份', success_fn) {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_line_data}`;
  const res = axios.post(url, {
    name: stock_name,
  }).then((res) => {
    const data = res.data[0]
    const dateList = data.date;
    option.xAxis[0].data = dateList;
    option.series[0].data = data.openPrice;
    option.series[1].data = data.closePrice;
    option.title[0].text = `${stock_name}折线图`;
    success_fn(option);
  });
}

export function get_gbi_data(success_fn) {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_gbi_data}`;
  const res = axios.get(url).then((res) => {
    const list = pick_gbi_data(res.data);
    const dateList = list.date;
    const valueList = list.value
    option.xAxis[0].data = dateList;
    option.series[0].data = valueList;
    option.series[0].name = 'gbi数据';
    option.series[1].data = undefined;
    option.title[0].text = `GBI折线图`;
    success_fn(option);
  });
}

function pick_gbi_data(data_arr) {
  const list = {
    date: [],
    value: [],
  };
  data_arr.forEach((data, index) => {
    list.date.push(data.Date);
    list.value.push(data.GBI);
  })
  return list;
}

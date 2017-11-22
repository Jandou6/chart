import axios from 'axios';
import { Api_config } from '../../../../config';
export const option = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  title: {
    text: '基础雷达图',
    textStyle: {
      color: '#fff',
    }
  },
  // tooltip: {},
  // legend: {
  //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  // },
  radar: {
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [{
        name: '市盈率PE',
        max: 100
      },
      {
        name: '市净率PB',
        max: 10
      },
      {
        name: '价销比PS',
        max: 10
      },
      {
        name: '净资产报酬率ROE',
        max: 1
      },
      {
        name: '每股盈余EPS',
        max: 1,
      },
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    data: [{
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '预算分配（Allocated Budget）',
        lineStyle: {
          normal: {
            color: '#00ff00'
          }
        }
      }
    ]
  }]
};
let company_name = '';
let success_call_fn = '';
export function get_max_data(name, success_fn) {
  // TODO: 连续调用请求太过繁琐，优化的时候，建议后端合并最大值的成为一个请求。
  get_company_specific(name);
  success_call_fn = success_fn;
  company_name = name;
}

// function get_max_market_value() {
//   const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_market_value}`;
//   axios.get(url).then((res) => {
//     const max = res.data[0].MaxMarketValue;
//     option.radar.indicator[0].max = max;
//     get_max_total_liabilities();
//   });
// }

// function get_max_total_liabilities() {
//   const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_total_liabilities}`;
//   axios.get(url).then((res) => {
//     const max = res.data[0].MaxLiability;
//     option.radar.indicator[1].max = max;
//     get_max_total_profit();
//   });
// }

// function get_max_total_profit() {
//   const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_total_profit}`;
//   axios.get(url).then((res) => {
//     const max = res.data[0].maxTotalProfit;
//     option.radar.indicator[2].max = max;
//     get_max_debt_to_assets_ratio();
//   });
// }

// function get_max_debt_to_assets_ratio(cb) {
//   const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_debt_to_assets_ratio}`;
//   axios.get(url).then((res) => {
//     const max = res.data[0].MaxDebtToAssetsRatio;
//     option.radar.indicator[3].max = parseFloat(max);
//     get_company_specific(company_name);
//   });
// }

function get_company_specific(name) {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_company_specific}`;
  axios.post(url, {
    name,
  }).then((res) => {
    try {
      const data = res.data[0] || 0;
      const pe = data.PE[0] || 0;
      const pb = data.PB[0] || 0;
      const roe = data.ROE[0] || 0;
      const ps = data.PS[0] || 0;
      const eps = data.EPS[0] || 0;
      option.series[0].data[0].value = [pe, pb, ps, roe, eps];
    } catch(e) {
      console.error('没有相关数据');
      option.series[0].data[0].value = [0, 0, 0, 0, 0];
    }

    option.title.text = `${name}雷达图`;
    success_call_fn(option);
  })
}

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
        name: '市值',
        max: 6500
      },
      {
        name: '总负债',
        max: 16000
      },
      {
        name: '总利润',
        max: 30000
      },
      {
        name: '负债资产比率',
        max: 38000
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

export function get_max_data() {
  get_max_market_value();
  get_max_total_liabilities();
  get_max_total_profit();
  get_max_debt_to_assets_ratio();

}

function get_max_market_value() {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_market_value}`;
  axios.post(url).then((res) => {
    const max = res.data[0].MaxmarketValue;
    option.radar.indicator[0].max = max;
  });
}

function get_max_total_liabilities() {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_total_liabilities}`;
  axios.post(url).then((res) => {
    const max = res.data[0].MaxLiability;
    option.radar.indicator[1].max = max;
  });
}

function get_max_total_profit() {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_total_profit}`;
  axios.post(url).then((res) => {
    const max = res.data[0].MaxLiability;
    option.radar.indicator[2].max = max;
  });
}

function get_max_debt_to_assets_ratio() {
  const url = `${Api_config.host}:${Api_config.port}${Api_config.get_max_debt_to_assets_ratio}`;
  axios.post(url).then((res) => {
    const max = res.data[0].MaxDebtToAssetsRatio;
    option.radar.indicator[3].max = max;
  });
}

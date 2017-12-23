import axios from 'axios';
import { Api_config } from '../../../config/api';

export function get_keyworod(keyword, cb) {
  const url = `//${Api_config.host}:${Api_config.port}/companyList/`
  axios.post(url, {
    name: keyword,
  }).then((res) => {
    console.log(res);
    cb(res.data);
  })
}
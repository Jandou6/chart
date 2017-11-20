import axios from 'axios';

export function get_keyworod(keyword, cb) {
  const url = '//localhost:3000/companyList/'
  axios.post(url, {
    name: keyword,
  }).then((res) => {
    console.log(res);
    cb(res.data);
  })
}
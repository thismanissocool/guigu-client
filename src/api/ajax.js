/**
 * Created by Administrator on 2018/12/4.
 */
import axios from 'axios';

export default function (url, data, method = 'GET') {

  //请求参数的内容可能是在url上或者在请求体中
  let qs = '';
  if (data){
    const arr = Object.keys(data);

    arr.forEach( key => {
      qs += `${key}=${data[key]}&`;
    });

    qs = qs.substring(0,qs.length-1);
  }

  //判断请求方式(axios返回值为promise对象)
  const type = method.toUpperCase();
  if (type === 'GET'){
    return axios.get(url + '?' + qs);
  } else if (type === 'POST'){
    return axios.post(url, qs, {'content-type': 'application/x-www-form-urlencoded'});
  }
};
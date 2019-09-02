import Axios from "axios"
import {REACT_APP_API_AXIOS} from "./urls"

export let axios=Axios.create({
  baseURL:REACT_APP_API_AXIOS
})

// 添加响应拦截器
axios.interceptors.response.use(function (res) {

  return res.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/**
 * Created by lyy on 2017/9/12.
 */
import axios from 'axios'
import qs from 'qs'

//设置全局axios配置
axios.defaults.timeout = 60000
axios.interceptors.response.use( response => {
  return response
},error=>{
  window.alert('请求失败')
  return Promise.reject(error)
});


export function fetchLogo(companyId){
  return axios.get('/compantId',qs.stringify({

  }).then(response=>{
    return response.data
  },respond=>{
    return respond
  }))
}

export async function login(loginData) {
  return await axios.post('http://114.215.27.185/t/icar/v1/guest/n02',qs.stringify(loginData)).then(response=>{
    return response.data
  },respond=>{
    return respond
  })
}
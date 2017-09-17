/**
 * Created by lyy on 2017/9/12.
 */
import axios from 'axios'
import qs from 'qs'

//设置全局axios配置
axios.defaults.timeout = 60000
axios.defaults.baseURL = process.env.NODE_ENV === "production" ?
    '//gofingers.com/t/icar/v1/' : ''
axios.interceptors.response.use( response => {
  return response
},error=>{
  window.alert('请求失败')
  return Promise.reject(error)
})


export function fetchCompanyConfig(companyId){
  return axios.post('http://www.easy-mock.com/mock/59b79760e0dc663341a704ee/example/companyId',qs.stringify({
    companyId: companyId
  })).then(response=>{
    return response.data
  },respond=>{
    return respond
  })
}

export function login(loginData) {
  return axios.post('/guest/n02',qs.stringify(loginData)).then(response=>{
    return response.data
  },respond=>{
    return respond
  })
}

export function fetchCarInfo(car) {
  return axios.post('auth/j01',qs.stringify(car)).then(response=>{
    return response.data
  },respond=>{
    return respond
  })
}
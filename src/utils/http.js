//axios基础封装
import axios from 'axios'

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:500
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
},e => Promise.reject(e))

//axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, e =>{
    return Promise.reject(e)
},e => Promise.reject(e))

export default httpInstance

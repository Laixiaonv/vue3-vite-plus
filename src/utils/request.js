import axios from 'axios'
// import router from '@/router/routers'
import store from '../store'
import { getToken } from '@/utils/auth'
// import Config from '@/settings'
import Cookies from 'js-cookie'
import { useMessage } from 'naive-ui'

const message = useMessage()

// 创建axios实例
const service = axios.create({
  // baseURL: import.meta.env.MODE === 'development' ? '/' : import.meta.env.VITE_BASE_API, // api 的 base_url
  baseURL: import.meta.env.VITE_BASE_API,
  // timeout: Config.timeout // 请求超时时间
  timeout: 1200000
})

console.log('process.env.VUE_APP_BASE_API', import.meta, import.meta.env.MODE, import.meta.env.VITE_BASE_API)

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 兼容blob下载出错json提示
    if (error.response.data instanceof Blob && error.response.data.type.toLowerCase().indexOf('json') !== -1) {
      const reader = new FileReader()
      reader.readAsText(error.response.data, 'utf-8')
      reader.onload = function(e) {
        const errorMsg = JSON.parse(reader.result).message
        message.error(errorMsg, { duration: 5000 })
      }
    } else {
      let code = 0
      try {
        code = error.response.data.status
      } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
          
         message.error('网络请求超时', { duration: 5000 })
          return Promise.reject(error)
        }
      }
      if (code) {
        if (code === 401) {
          store.dispatch('LogOut').then(() => {
            // 用户登录界面提示
            Cookies.set('point', 401)
            location.reload()
          })
        } else if (code === 403) {
          // router.push({ path: '/401' })
        } else {
          const errorMsg = error.response.data.message
          if (errorMsg !== undefined) {
            message.error(errorMsg, { duration: 5000 })
          }
        }
      } else {
        if (error.response.data.resCode === '401') {
          message.error(error.response.data.resMsg, { duration: 5000 })
          store.dispatch('LogOut').then(() => {
            // 用户登录界面提示
            Cookies.set('point', 401)
            location.reload()
          })
        } else {
          message.error('接口请求失败', { duration: 5000 })
        }
      }
    }
    return Promise.reject(error)
  }
)
export default service

/*
 * @Author: JL Guan
 * @Date: 2022-06-13 09:10:25
 * @description: file description
 * @LastEditTime: 2022-06-14 09:43:40
 * @FilePath: \vite-builder\src\utils\axios.ts
 */
import axios from 'axios'
import qs from 'qs'
import { ElMessage } from '.'

interface Response {
  success: boolean
  errorStr: string
  data: any
  errorCode: number
}

const instance = axios.create({
  baseURL: '',
  headers: {
    Authorization: 'token',
    timeout: 10000,
    'content-type': 'application/json',
  },
})

instance.defaults.withCredentials = true

instance.interceptors.request.use(
  config => {
    if (config.method == 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  (response: { data: Response, status: number }) => {
    if (response.status !== 200) {
      ElMessage.error(response.data.errorStr)
      return Promise.reject(response)
    }
    return Promise.resolve(response.data)
  },
  err => {
    ElMessage.error(err.toString().search('timeout') ? '请求超时！' : err)
    return Promise.reject(err)
  }
)

export default instance

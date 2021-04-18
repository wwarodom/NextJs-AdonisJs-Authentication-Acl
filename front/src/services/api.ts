import axios from 'axios'
import Cookie from 'js-cookie'

import { HandleRefreshToken } from '@/utils/authHandles'

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/'
})

 
api.interceptors.request.use(async config => { 
  try {
    const token = await Cookie.getJSON('credentials')?.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }
  catch(e) {
    console.log('catch error: ', e)
  } 
  return config
})

api.interceptors.response.use(async (response: any) => {
  console.log('got status from server', response)
  return response
}, async function (error) {
  console.log('error: ', error) 
  const response = error.response
  const config = response.config 
  console.log("api.ts: resp ", response.data.error) 
  console.log("api.ts: config ", config) 
  
  const refreshToken = await Cookie.getJSON('credentials')?.refreshToken
  console.log('refresh token: ', refreshToken)
  var res 
  if ( response.status === 401 && refreshToken !== null && config.url !== '/auth/refresh') {
    // HandleRefreshToken() 
    switch (response.config.method) {
      case 'get':
        res = await api.get(config.url)
        break
      case 'post': 
        res = await api.post(config.url, config.data) 
        break
      case 'put':
        res = await api.put(config.url, config.data)
        break
      case 'delete':
        res = await api.delete(config.url)
        break
      default:
        res = response
    }
  }
  else if (response.status === 400){
    console.log('response.data.error: ', response)
    return response
  }
  
  return res
})

export default api
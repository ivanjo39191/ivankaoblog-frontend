import request from '@/utils/request'

// django google social login
export function googleUserInfo2 (backendUrl) {
  return request({
    url: backendUrl + '/api/users/auth/user/',
    method: 'get'
  })
}
export function googleUserInfo (axios, backendUrl) {
  const user = axios.get(backendUrl + '/api/users/auth/user/')
  return user
}

// django jwt
export function login (data) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/token/',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/users/profile/',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  })
}

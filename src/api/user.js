import request from '@/utils/request'

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

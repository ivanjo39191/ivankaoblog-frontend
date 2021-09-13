import request from '@/utils/request'

export function getUserAllTrip(token) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/trips/trip/',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
}


export function getTrip(token, tripid) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/trips/trip/' + tripid,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
}


export function createTrip(token, data) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/trips/trip/',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    data: data
  })
}

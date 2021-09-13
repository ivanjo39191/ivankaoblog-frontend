import request from '@/utils/request'

export function getAllPlace() {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/trips/places/',
    method: 'get',
  })
}

export function getSearchPlace(placename) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/trips/places/position/?name=' + placename,
    method: 'get',
  })
}

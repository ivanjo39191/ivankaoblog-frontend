import request from '@/utils/request'

export function getBlog() {
  return request({
    url: 'http://ttime-demo.ivankaoblog.com:8000/api/blog/blog/',
    method: 'get',
  })
}

export function getBlogTitle() {
  return request({
    url: 'http://ttime-demo.ivankaoblog.com:8000/api/blog/blog/title/',
    method: 'get',
  })
}
import request from '@/utils/request'

export function getBlog() {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/',
    method: 'get',
  })
}

export function getBlogTitle() {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/title/',
    method: 'get',
  })
}

export function getBlogTypeTitle(type, subtype) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/blogtype/?types=' + type + '&subtypes' + subtype,
    method: 'get',
  })
}

export function getArticleDetail(id) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/' + id,
    method: 'get',
  })
}
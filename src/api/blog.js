import request from '@/utils/request'

export function getBlog () {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/',
    method: 'get'
  })
}

export function getBlogTitle () {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/title/',
    method: 'get'
  })
}

export function getBlogTypeTitle (type) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/blogtype/?types=' + type,
    method: 'get'
  })
}

export function getBlogSubTypeTitle (type, subtype) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/blogtype/?types=' + type + '&subtypes' + subtype,
    method: 'get'
  })
}

export function getArticleDetail (id, title) {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blog/' + id + '/?title' + title,
    method: 'get'
  })
}

export function getHomeCarousel () {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/homecarousel/',
    method: 'get'
  })
}

export function getBlogType () {
  return request({
    url: process.env.VUE_APP_BACKEND_SERVER + '/api/blog/blogtype/',
    method: 'get'
  })
}

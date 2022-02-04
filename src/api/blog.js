import request from '@/utils/request'

export function getBlog (backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blog/',
    method: 'get'
  })
}

export function getBlogTitle (backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blog/title/',
    method: 'get'
  })
}

export function getBlogTypeTitle (type, backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blog/blogtype/?types=' + type,
    method: 'get'
  })
}

export function getBlogSubTypeTitle (type, subtype, backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blog/blogtype/?types=' + type + '&subtypes' + subtype,
    method: 'get'
  })
}

export function getArticleDetail (id, title, backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blog/' + id + '/?title' + title,
    method: 'get'
  })
}

export function getHomeCarousel (backendUrl) {
  return request({
    url: backendUrl + '/api/blog/homecarousel/',
    method: 'get'
  })
}

export function getBlogSetting (backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blogsetting/',
    method: 'get'
  })
}

export function getBlogType (backendUrl) {
  return request({
    url: backendUrl + '/api/blog/blogtype/',
    method: 'get'
  })
}

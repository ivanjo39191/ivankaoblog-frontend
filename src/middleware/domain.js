import { getHomeCarousel, getBlogSetting } from '@/api/blog'
export default async function ({ store, req }) {
  // router-link 無法讀取到 req 會報錯，故進行判斷
  if (req) {
    const domain = req.headers.host
    let backendUrl = ''
    if (domain === process.env.VUE_APP_BACKEND_SERVER_1_DOMAIN) {
      store.commit('domain/setDomain', process.env.VUE_APP_BACKEND_SERVER_1)
      backendUrl = process.env.VUE_APP_BACKEND_SERVER_1
    } else if (domain === process.env.VUE_APP_BACKEND_SERVER_2_DOMAIN) {
      store.commit('domain/setDomain', process.env.VUE_APP_BACKEND_SERVER_2)
      backendUrl = process.env.VUE_APP_BACKEND_SERVER_2
    }
    await getBlogSetting(backendUrl)
      .then((response) => {
        store.commit('domain/setTitle', response[0].title)
        store.commit('domain/setSubtitle', response[0].subtitle)
      })
    await getHomeCarousel(backendUrl)
      .then((response) => {
        store.commit('domain/setBanner', response[0].banner)
      })
  }
}

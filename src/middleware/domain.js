export default function ({ store, req }) {
  // router-link 無法讀取到 req 會報錯，故進行判斷
  if (req) {
    const domain = req.headers.host
    if (domain === process.env.VUE_APP_BACKEND_SERVER_1_DOMAIN) {
      store.commit('domain/setDomain', process.env.VUE_APP_BACKEND_SERVER_1)
    } else if (domain === process.env.VUE_APP_BACKEND_SERVER_2_DOMAIN) {
      store.commit('domain/setDomain', process.env.VUE_APP_BACKEND_SERVER_2)
    }
  }
}

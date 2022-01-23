export default function ({ store, req }) {
  // router-link 無法讀取到 req 會報錯，故進行判斷
  if (req) {
    const domain = req.headers.host
    if (domain === 'shin-chan.ichweblog.com') {
      store.commit('domain/setDomain', 'https://' + domain + ':17443')
    } else if (domain === 'ivankao.ichweblog.com') {
      store.commit('domain/setDomain', 'https://' + domain + ':18443')
    }
  }
}

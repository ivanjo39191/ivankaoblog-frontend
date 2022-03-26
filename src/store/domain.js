
export const state = () => ({
  domain: '',
  title: '',
  subtitle: '',
  banner: '',
  host:''
})

export const mutations = {
  setDomain (state, domain) {
    state.domain = domain
  },
  setTitle (state, title) {
    state.title = title
  },
  setSubtitle (state, subtitle) {
    state.subtitle = subtitle
  },
  setBanner (state, banner) {
    state.banner = banner
  },
  setHost (state, host) {
    state.host = host
  }
}

export const getters = {
  domain (state) {
    return state.domain
  },
  title (state) {
    return state.title
  },
  subtitle (state) {
    return state.subtitle
  },
  banner (state) {
    return state.banner
  },
  host (state) {
    return state.host
  }
}

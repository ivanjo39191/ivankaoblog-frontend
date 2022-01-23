
export const state = () => ({
  domain: ''
})

export const mutations = {
  setDomain (state, domain) {
    state.domain = domain
  }
}

export const getters = {
  domain (state) {
    return state.domain
  }
}

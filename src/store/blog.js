import { getBlogTypeTitle } from '@/api/blog'

export const state = () => ({
  latest: [],
  subnavbarActive: ''
})

export const mutations = {
  setLatest (state, latest) {
    state.latest = latest
  },
  setSubnavbarActive (state, type) {
    state.subnavbarActive = type
  }
}

export const actions = {
  switchLatest ({ commit }, type) {
    return new Promise((resolve, reject) => {
      getBlogTypeTitle(type)
        .then((response) => {
          commit('setLatest', response)
          commit('setSubnavbarActive', type)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export const getters = {
  getLatest (state) {
    return state.latest
  },
  getSubnavbarActive (state) {
    return state.subnavbarActive
  }
}

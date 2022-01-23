import { getBlogTitle, getBlogTypeTitle } from '@/api/blog'

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
  switchLatest ({ commit }, obj) {
    return new Promise((resolve, reject) => {
      if (obj.typeName === '') {
        getBlogTitle(obj.backendUrl)
          .then((response) => {
            commit('setLatest', response)
            commit('setSubnavbarActive', obj.typeName)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      } else {
        getBlogTypeTitle(obj.typeName, obj.backendUrl)
          .then((response) => {
            commit('setLatest', response)
            commit('setSubnavbarActive', obj.typeName)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      }
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

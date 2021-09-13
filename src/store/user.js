import { login, getInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

export const state = () => ({
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
})

export const getters = {
  token (state) {
    return state.token
  },
  name (state) {
    return state.name
  },
  introduction (state) {
    return state.introduction
  },
  roles (state) {
    return state.roles
  }
}

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_UID: (state, uid) => {
    state.uid = uid
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

export const actions = {
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then((response) => {
        const token = response.access
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then((response) => {
        // console.log(JSON.stringify(response))
        // const { data } = response
        const data = response[0]
        if (!data) {
          reject(new Error('Verification failed, please Login again.'))
        }
        const uid = data.uid.username
        const { roles, name, avatar, introduction } = data
        if (!roles || roles.length <= 0) {
          reject(new Error('getInfo: roles must be a non-null array!'))
        }
        commit('SET_UID', uid)
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

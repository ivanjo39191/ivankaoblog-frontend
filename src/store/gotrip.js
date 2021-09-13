export const state = () => ({
  pagename: ['maptrip'],
  placename: '',
  placepicture: '',
  picturemore: '',
  placeopen: '',
  placepx: '',
  placepy: ''
})

export const mutations = {
  switchPage (state, pagename) {
    if (!state.pagename.includes(pagename)) {
      state.pagename = []
      state.pagename.push(pagename)
    }
  },
  showPage (state, pagename) {
    if (!state.pagename.includes(pagename)) {
      state.pagename.push(pagename)
    }
  },
  placeName (state, placename) {
    state.placename = placename
  },
  placePicture (state, placepicture) {
    state.placepicture = placepicture
  },
  placePx (state, placepx) {
    state.placepx = placepx
  },
  placePy (state, placepy) {
    state.placepy = placepy
  }
}

export const getters = {
  pagename (state) {
    return state.pagename
  }
}

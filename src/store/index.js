import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collections: [],
    allvideoData: [],
    activeVideo: {},
    relateVideo: []
  },
  mutations: {
    add (state, data) {
      if (!state.collections.includes(data)) {
        state.collections.push(data)
      }
    },
    remove (state, data) {
      state.collections = state.collections.filter(item => {
        return item.id !== data.id
      })
    },
    addAllData (state, data) {
      for (const i of data) {
        state.allvideoData.push(i)
      }
    },
    activeVideo (state, data) {
      state.activeVideo = data
    },
    relateVideo (state, data) {
      state.relateVideo = data
    }
  },
  getters: {
    collections (state) {
      return state.collections
    },
    allvideoData (state) {
      return state.allvideoData
    },
    activeVideo (state) {
      return state.activeVideo
    },
    relateVideo (state) {
      return state.relateVideo
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

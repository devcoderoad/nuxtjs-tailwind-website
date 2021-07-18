/* states modules */
import STATUS_TYPES from '~/config/statusTypes'
const { INIT } = STATUS_TYPES

// top level states
const state = () => ({
  menu: {
    data: [],
    error: null,
    status: INIT
  }
})

// top level getters
const getters = {
  getMenu: (state) => state.menu.data
}

// top level mutations
const mutations = {
  GET_MENU(state, payload) {
    state.menu.status = payload
  },
  SET_MENU(state, payload) {
    state.menu.data = payload
    state.menu.status = 'success'
  },
  SET_MENU_ERROR(state, payload) {
    state.menu.error = payload
    state.menu.data = null
    state.menu.status = 'error'
  }
}

// top level actions
const actions = {
  async nuxtServerInit({ commit, context }, { req }) {
    try {
      commit('GET_MENU', 'loading')
      const storeItems = await this.$content('pages')
        .only(['title', 'slug'])
        .where({ slug: { $ne: 'home' }, showInMenu: true, status: 'publish' })
        .sortBy('indexOrder', 'asc')
        .limit(5)
        .fetch()
        .catch((err) => {
          commit('SET_MENU_ERROR', err)
        })
      commit('SET_MENU', storeItems)
    } catch (error) {
      commit('SET_MENU_ERROR', error)
    }
  }
}

// export store modules
export default {
  state,
  getters,
  mutations,
  actions
}

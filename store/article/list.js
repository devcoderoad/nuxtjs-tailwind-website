import STATUS_TYPES from '~/config/statusTypes'
const { INIT, LOADING, SUCCESS, ERROR } = STATUS_TYPES

export const mutations = {
  GET_RESULT_LIST: (state, payload) => {
    state.status = LOADING
  },
  SET_RESULT_LIST: (state, payload) => {
    state.data = payload
    state.status = SUCCESS
  },
  SET_ERROR_LIST: (state, payload) => {
    state.data = null
    state.error = payload
    state.status = ERROR
  }
}

export const actions = {
  async getList({ commit }, payload = { status: 'publish' }, callback) {
    commit('GET_RESULT_LIST', LOADING)
    const storeItems = await this.$content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .where(payload)
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()
      .catch((err) => {
        commit('SET_ERROR_LIST', err, callback)
      })
    commit('SET_RESULT_LIST', storeItems)
  }
}

export const getters = {
  getList: (state) => JSON.parse(JSON.stringify(state))
}

export default {
  namespace: true,
  state: () => ({ status: INIT, error: null, meta: {}, data: [] }),
  mutations,
  actions,
  getters
}

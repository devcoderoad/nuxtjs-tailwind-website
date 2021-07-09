import STATUS_TYPES from '~/config/statusTypes'
const { INIT, LOADING, SUCCESS, ERROR } = STATUS_TYPES

export const mutations = {
  GET_RESULT_LIST_QUERY: (state, payload) => {
    state.status = LOADING
  },
  SET_RESULT_LIST_QUERY: (state, payload) => {
    state.data = payload
    state.status = SUCCESS
  },
  SET_ERROR_LIST_QUERY: (state, payload) => {
    state.data = null
    state.error = payload
    state.status = ERROR
  }
}

export const actions = {
  async getListQuery({ commit }, payload, callback) {
    try {
      const { where = { status: 'publish' }, limit = 10, lang = '' } = payload
      const i18n = lang ? `articles/${lang}` : 'articles'

      commit('GET_RESULT_LIST_QUERY', LOADING)
      const storeItems = await this.$content(i18n)
        .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
        .where(where)
        .limit(limit)
        .sortBy('createdAt', 'desc')
        .fetch()
        .catch((err) => {
          commit('SET_ERROR_LIST_QUERY', err, callback)
        })

      commit('SET_RESULT_LIST_QUERY', storeItems)
    } catch (error) {
      commit(
        'SET_ERROR_LIST_QUERY',
        'Something wrong with the payload',
        callback
      )
    }
  }
}

export const getters = {
  getListQuery: (state) => JSON.parse(JSON.stringify(state))
}

export default {
  namespace: true,
  state: () => ({ status: INIT, error: null, meta: {}, data: [] }),
  mutations,
  actions,
  getters
}

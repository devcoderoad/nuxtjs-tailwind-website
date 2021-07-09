import STATUS_TYPES from '~/config/statusTypes'
const { INIT, LOADING, SUCCESS, ERROR } = STATUS_TYPES

export const mutations = {
  GET_RESULT_DETAIL: (state, payload) => {
    state.status = LOADING
  },
  SET_RESULT_DETAIL: (state, payload) => {
    state.data = payload
    state.status = SUCCESS
  },
  SET_ERROR_DETAIL: (state, payload) => {
    state.data = null
    state.error = payload
    state.status = ERROR
  }
}

export const actions = {
  async getDetail({ commit }, payload, callback) {
    try {
      const { where = { status: 'publish' }, limit = 1, lang = '' } = payload

      commit('GET_RESULT_DETAIL', LOADING)

      const content = lang ? `articles/${lang}` : 'articles'

      const [storeItem] = await this.$content(content)
        .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
        .where(where)
        .sortBy('createdAt', 'desc')
        .limit(limit)
        .fetch()
        .catch((err) => {
          commit('SET_ERROR_DETAIL', err, callback)
        })

      commit('SET_RESULT_DETAIL', storeItem)
    } catch (error) {
      commit('SET_ERROR_DETAIL', 'Something wrong with the payload', callback)
    }
  }
}

export const getters = {
  getDetail: (state) => JSON.parse(JSON.stringify(state))
}

export default {
  namespace: true,
  state: () => ({ status: INIT, error: null, meta: {}, data: {} }),
  mutations,
  actions,
  getters
}

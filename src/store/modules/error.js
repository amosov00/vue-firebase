export default {
    state: {
        errorMessage: ''
    },
    mutations: {
        setError(state, error) {
            state.errorMessage = error?.message
        }
    },
    actions: {
        errorController({commit}, error) {
            commit('setError', error)
            setTimeout(()=>{
                commit('setError', null)
            }, 5000)
        }
    },
    getters: {
        errorGetter(state) {
            return state.errorMessage
        }
    }
}

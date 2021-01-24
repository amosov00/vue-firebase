import firebase from "firebase";

export default {
    state: {
        user: ''
    },
    mutations: {
        setUserInfo(state, data) {
            state.user = data
        }
    },
    actions: {
        async getUserInfo({commit, dispatch}) {
            try {
                const uid = firebase.auth().currentUser.uid
                const response = await firebase.firestore().collection('users').doc(uid).get()
                commit('setUserInfo', response.data())
            } catch (e) {
                dispatch('errorController', e)
            }
        }
    },
    getters: {
        userGetter(state) {
            return state.user
        }
    }
}

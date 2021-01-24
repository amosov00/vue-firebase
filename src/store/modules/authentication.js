import firebase from "firebase";
import router from "@/router";

export default {
    actions: {
        async login({dispatch}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                router.push('/')
            } catch (e) {
                dispatch('errorController', e)
            }
        },
        async logout({dispatch}) {
            try {
                await firebase.auth().signOut()
                router.push('/authentication')
            } catch (e) {
                dispatch('errorController', e)

            }
        }
    }
}

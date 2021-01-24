import firebase from "firebase";
import router from "@/router";
export default {
    actions: {
        async createUser({dispatch}, {email, password, name, phone}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = firebase.auth().currentUser.uid
                await firebase.firestore().collection('users').doc(uid).set({
                    email,
                    name,
                    phone
                })
                router.push('/')
            } catch (e) {
                dispatch('errorController', e)
            }
        },
    }
}

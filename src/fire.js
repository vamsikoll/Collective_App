import firebase from 'firebase';
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDJ461fBLFCbyS0NLylnBADKTJUUAk4h5w",
    authDomain: "collective-development-f8b3c.firebaseapp.com",
    projectId: "collective-development-f8b3c",
    storageBucket: "collective-development-f8b3c.appspot.com",
    messagingSenderId: "906717329175",
    appId: "1:906717329175:web:9410600627c0cff653e952"
})

export const auth = app.auth()
export default app


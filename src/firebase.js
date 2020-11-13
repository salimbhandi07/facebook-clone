import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCzCr7ca1_vQip2k1PMNjTtPGLPc4VNxwE",
    authDomain: "facebook-clone-ef6da.firebaseapp.com",
    databaseURL: "https://facebook-clone-ef6da.firebaseio.com",
    projectId: "facebook-clone-ef6da",
    storageBucket: "facebook-clone-ef6da.appspot.com",
    messagingSenderId: "497851072277",
    appId: "1:497851072277:web:da5828055093a44077731c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
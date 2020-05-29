import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // DB機能を使うために読み込み

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAKcfaVMYrOJcWsHOAaCBm7zSuM520dQyk",
    authDomain: "slack-clone-app-ebae6.firebaseapp.com",
    databaseURL: "https://slack-clone-app-ebae6.firebaseio.com",
    projectId: "slack-clone-app-ebae6",
    storageBucket: "slack-clone-app-ebae6.appspot.com",
    messagingSenderId: "920094833200"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore() // DBを定義
export {
  firebase,
  db
}

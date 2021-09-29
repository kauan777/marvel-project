import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_APP_ID
  };
  //Verificação para não duplicar a inicialização do projeto, por que se não dá erro 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
 }
const auth = firebase.auth();

export {firebase, auth}
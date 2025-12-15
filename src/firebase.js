// Importa las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-jQaL1pwaaJDvk-tPdqF9HOmxWBRX4Zs',
  authDomain: 'digital-dreamers-ctc.firebaseapp.com',
  projectId: 'digital-dreamers-ctc',
  storageBucket: 'digital-dreamers-ctc.firebasestorage.app',
  messagingSenderId: '920156689286',
  appId: '1:920156689286:web:a70f094e4b731415d21207',
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

// Inicializa Firestore (base de datos)
// Exporta db en formato v9 (lo que espera taskService.js)
export const db = getFirestore(app)
export const auth = getAuth(app)
export default app

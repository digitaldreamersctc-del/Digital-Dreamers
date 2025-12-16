// Importa las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALdQCEZY57rWwbdtPQj39NsTk2PrPbLIc",
  authDomain: "digital-dreamers-ct.firebaseapp.com",
  projectId: "digital-dreamers-ct",
  storageBucket: "digital-dreamers-ct.firebasestorage.app",
  messagingSenderId: "245905003710",
  appId: "1:245905003710:web:768769a8b41ef0cd1efaef"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

// Inicializa Firestore (base de datos)
// Exporta db en formato v9 (lo que espera taskService.js)
export const db = getFirestore(app)
export const auth = getAuth(app)
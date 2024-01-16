import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC6OqL7AphHMU0i_Clvx8QsAW5WRIzHpzs',
  authDomain: 'native-unnamed-app.firebaseapp.com',
  projectId: 'native-unnamed-app',
  storageBucket: 'native-unnamed-app.appspot.com',
  messagingSenderId: '489459275089',
  appId: '1:489459275089:web:0b4a6eb88312c7e226af70',
  measurementId: 'G-K3S67H0X39',
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
const analytics = getAnalytics(FIREBASE_APP)

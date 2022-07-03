import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCe0rBH8sQB7kEKxfGsyv6ZXXtBQ7c_QsE",
  authDomain: "forms-login-6792c.firebaseapp.com",
  projectId: "forms-login-6792c",
  storageBucket: "forms-login-6792c.appspot.com",
  messagingSenderId: "138619868153",
  appId: "1:138619868153:web:73b18cddfa0776c360a328",
  measurementId: "G-VJZK5QLDGG"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
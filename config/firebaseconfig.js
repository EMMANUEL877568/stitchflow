// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import {getReactNativePersistence, initializeAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration                         
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE__API_KEY,
  authDomain: "stitchflow-db184.firebaseapp.com",
  projectId: "stitchflow-db184",
  storageBucket: "stitchflow-db184.firebasestorage.app",
  messagingSenderId: "962716895134",
  appId: "1:962716895134:web:304c23a0c9d73e5426388f"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp( firebaseConfig) : getApp()
const db = getFirestore(app);
const auth = initializeAuth(app,{             
    persistence :getReactNativePersistence(ReactNativeAsyncStorage)
})
export {auth,db}
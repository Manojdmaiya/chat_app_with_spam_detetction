// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence,initializeAuth} from 'firebase/auth';
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";

import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC3FuU_5CsNNw-EH4k-iMCktDknqkdPBfQ",
  authDomain: "fir-chat-37833.firebaseapp.com",
  projectId: "fir-chat-37833",
  storageBucket: "fir-chat-37833.appspot.com",
  messagingSenderId: "858376717841",
  appId: "1:858376717841:web:97f9a8302a39500cead3b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);


export const usersRef = collection(db,'users');
export const roomRef = collection(db,'rooms');

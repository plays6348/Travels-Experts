// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiDKS93CGh85jBJpUGXu_gBb3WA7o2uws",
  authDomain: "euroholidays-55335.firebaseapp.com",
  projectId: "euroholidays-55335",
  storageBucket: "euroholidays-55335.appspot.com",
  messagingSenderId: "1014086594244",
  appId: "1:1014086594244:web:0e135bfe4cb5b220a7e391",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

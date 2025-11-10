// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
console.log("🔍 env param：");
console.log("API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
console.log("API Key length:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.length);
console.log("API Key has quotes?", process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('"'));
const firebaseConfig = {
  apiKey: "AIzaSyCW0uggHy2CP6610u0dVtcAxViZhyTBDiM",
  authDomain: "cprg306-demos-d-v1-8411f.firebaseapp.com",
  projectId: "cprg306-demos-d-v1-8411f",
  storageBucket: "cprg306-demos-d-v1-8411f.firebasestorage.app",
  messagingSenderId: "174102940597",
  appId: "1:174102940597:web:8870b3c8c3ba621c9ba7fc"
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

console.log("🔥 Firebase Config:", firebaseConfig);
// Initialize Firebase
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// export const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

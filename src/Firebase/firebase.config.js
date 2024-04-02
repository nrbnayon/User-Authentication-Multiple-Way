// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  //   apiKey: "AIzaSyCcxlA54GFmvZ1xxBQtuvQdPusE9okQiNo",
  //   authDomain: "user-authentication-8b481.firebaseapp.com",
  //   projectId: "user-authentication-8b481",
  //   storageBucket: "user-authentication-8b481.appspot.com",
  //   messagingSenderId: "873736763731",
  //   appId: "1:873736763731:web:91f5a6800eec405d62c9a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app;
const auth = getAuth(app);
export default auth;

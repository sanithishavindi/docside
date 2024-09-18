// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDstWGn7NOz_nH3yccMFsbgXNj4dEplSkU",
  authDomain: "final-70629.firebaseapp.com",
  projectId: "final-70629",
  storageBucket: "final-70629.appspot.com",
  messagingSenderId: "399540071097",
  appId: "1:399540071097:web:ff3def2afbf846e87b0968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);


  
  export const signIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
        return true;
      } catch (error) {
        console.error("Error signing up:", error);
        return false;
      }
  };





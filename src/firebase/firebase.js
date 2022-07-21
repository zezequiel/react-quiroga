import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxp_MpWT-81j8w7JHtpigl2B2PMbYrTVY",
  authDomain: "quiroga-react.firebaseapp.com",
  projectId: "quiroga-react",
  storageBucket: "quiroga-react.appspot.com",
  messagingSenderId: "857256907799",
  appId: "1:857256907799:web:ea0a8c124b1b125c153852"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

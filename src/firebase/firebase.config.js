import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHn_s5XAfL71LUcYY-lrCmDx7J79qTa0w",
  authDomain: "tasty-recipes-b8ce6.firebaseapp.com",
  projectId: "tasty-recipes-b8ce6",
  storageBucket: "tasty-recipes-b8ce6.appspot.com",
  messagingSenderId: "921234631734",
  appId: "1:921234631734:web:f70a5c5cf61d639def7c97"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
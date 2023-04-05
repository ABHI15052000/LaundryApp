import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo94Oa55s_KuGxEU9udJ2AlsYFzNx2_Xk",
  authDomain: "laundryapp-26123.firebaseapp.com",
  projectId: "laundryapp-26123",
  storageBucket: "laundryapp-26123.appspot.com",
  messagingSenderId: "514809449446",
  appId: "1:514809449446:web:56ff8f68fb3a4c3b3be427",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };

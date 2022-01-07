import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCApZ8JxZdLr1A_7Ofcg-Hm1-5WzNeKVps",
  authDomain: "hotyak-18800.firebaseapp.com",
  projectId: "hotyak-18800",
  storageBucket: "hotyak-18800.appspot.com",
  messagingSenderId: "707896323990",
  appId: "1:707896323990:web:16377d96a3cb30d020b7b7"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage()
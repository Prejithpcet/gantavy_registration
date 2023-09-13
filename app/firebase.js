import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9fta8KYZ4tOiQsdO4kGIVHZIN4amaNb4",
  authDomain: "gantavy-21731.firebaseapp.com",
  projectId: "gantavy-21731",
  storageBucket: "gantavy-21731.appspot.com",
  messagingSenderId: "718513580311",
  appId: "1:718513580311:web:f586e0bbad2d487e5eaf52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

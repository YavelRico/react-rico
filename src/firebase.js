import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSrJ8TCr9Y14F-7-FQ2yDRHlA6eZejw24",
  authDomain: "react-rico.firebaseapp.com",
  projectId: "react-rico",
  storageBucket: "react-rico.appspot.com",
  messagingSenderId: "932832931577",
  appId: "1:932832931577:web:64e555e9310a7625c0fc28",
  measurementId: "G-N2V5LL1NB3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
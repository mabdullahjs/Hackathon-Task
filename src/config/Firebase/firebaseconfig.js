import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDjlPWE0GainT5BMret_lCiaECesqpctIE",
  authDomain: "login-322.firebaseapp.com",
  databaseURL: "https://login-322-default-rtdb.firebaseio.com",
  projectId: "login-322",
  storageBucket: "login-322.appspot.com",
  messagingSenderId: "555330133031",
  appId: "1:555330133031:web:7d08d2c341d90f63a98202",
  measurementId: "G-ZHZD452HXF"
};


const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5mNu0L1lBpHNu4iU4nE7LPSv1RcM8w-A",
    authDomain: "davids-burger.firebaseapp.com",
    projectId: "davids-burger",
    storageBucket: "davids-burger.appspot.com",
    messagingSenderId: "193342423168",
    appId: "1:193342423168:web:ba25383b42ca6f0096a665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
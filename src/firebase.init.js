// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCV4JtnK6vaV4IImjhggA9zf0Sluu8-TZg",
    authDomain: "gym-trainer-firebase-website.firebaseapp.com",
    projectId: "gym-trainer-firebase-website",
    storageBucket: "gym-trainer-firebase-website.appspot.com",
    messagingSenderId: "384908765410",
    appId: "1:384908765410:web:045d7220570a56337b96bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);
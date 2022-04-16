// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAS-0N4Yn80qV95CdhjfJdCcvltitMW9E",
    authDomain: "gym-services-website.firebaseapp.com",
    projectId: "gym-services-website",
    storageBucket: "gym-services-website.appspot.com",
    messagingSenderId: "260440841887",
    appId: "1:260440841887:web:8e2daa323b4c4e0e118caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
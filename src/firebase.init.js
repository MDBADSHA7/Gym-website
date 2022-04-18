// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyzOOJOk2KIph8fKwHp8_AwluisYNLGss",
    authDomain: "gym-services-firebase-website.firebaseapp.com",
    projectId: "gym-services-firebase-website",
    storageBucket: "gym-services-firebase-website.appspot.com",
    messagingSenderId: "422033785586",
    appId: "1:422033785586:web:47e0a430880057c9b9066b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
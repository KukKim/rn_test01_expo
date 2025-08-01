import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCukm4M-nK7dxQTNVAmweB3tKG3dY8TnI8",
  authDomain: "test01-12147.firebaseapp.com",
  projectId: "test01-12147",
  storageBucket: "test01-12147.firebasestorage.app",
  messagingSenderId: "772025396469",
  appId: "1:772025396469:web:9877abc9526ac7799969bc",
  measurementId: "G-4H6E1BG9X8",
};

export function initializeFirebae() {
  initializeApp(firebaseConfig);
}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyBhNdyyAruij5AhzLXOzu1desJV-PQRsrE",
    authDomain: "todo-app-56d39.firebaseapp.com",
    projectId: "todo-app-56d39",
    storageBucket: "todo-app-56d39.appspot.com",
    messagingSenderId: "774296703969",
    appId: "1:774296703969:web:ee7f401c652a361c5338a0",
    measurementId: "G-ZMZL9PYXQ9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 

export default app

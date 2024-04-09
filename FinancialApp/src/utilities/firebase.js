// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOkrnWgwDUXdsajNlZinriobelcmPuWeU",
  authDomain: "info--6132.firebaseapp.com",
  projectId: "info--6132",
  storageBucket: "info--6132.appspot.com",
  messagingSenderId: "499120008272",
  appId: "1:499120008272:web:22c8cf9bb6cd896a8e7555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const transactionCollection = collection(db, "transactions")
// export const transactionsList= () => getDocs(transactionCollection)

export const databaseHelper = {
    transactionsList() {
        return getDocs(transactionCollection)
    },
    addTransaction(transaction){
        return addDoc(transactionCollection, transaction)
    }
}

export { app , db }
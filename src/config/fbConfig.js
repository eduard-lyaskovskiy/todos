import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVPF8KmylpD_mHnBpO9bKEj7vxegbRWro",
    authDomain: "todo-a60d7.firebaseapp.com",
    databaseURL: "https://todo-a60d7.firebaseio.com",
    projectId: "todo-a60d7",
    storageBucket: "todo-a60d7.appspot.com",
    messagingSenderId: "325323496233",
    appId: "1:325323496233:web:fdc812c59b140436757538",
    measurementId: "G-M5RPB7QX5B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
export default firebase;
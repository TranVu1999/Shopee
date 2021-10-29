import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBEn0r5FTwYnsyyTxlgl_KcRONVB5af7rE",
    authDomain: "shopee-5da7d.firebaseapp.com",
    projectId: "shopee-5da7d",
    storageBucket: "shopee-5da7d.appspot.com",
    messagingSenderId: "136658334950",
    appId: "1:136658334950:web:fa670dc0e5616171087727",
    measurementId: "G-YTFG6KQZWZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
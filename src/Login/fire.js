import firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyA1e4E-W3b61-LI_1r_4Mh4-VPfKPpa9UE",
   authDomain: "login-6fe3a.firebaseapp.com",
   projectId: "login-6fe3a",
   storageBucket: "login-6fe3a.appspot.com",
   messagingSenderId: "880103315918",
   appId: "1:880103315918:web:0251bb2345d2dfe461b39f"
}; 
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
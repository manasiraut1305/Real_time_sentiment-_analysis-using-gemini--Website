 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
 const firebaseConfig = {
    apiKey: "AIzaSyAdoINEQTzhgbW58zL_QyMY1rTydHAbwFE",
    authDomain: "ecomm-website-de556.firebaseapp.com",
    projectId: "ecomm-website-de556",
    storageBucket: "ecomm-website-de556.appspot.com",
    messagingSenderId: "852034148637",
    appId: "1:852034148637:web:0597d69379d2af5365a9f4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
 const signUp=document.getElementById('submitSignUp');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName:lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='loginn.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });

 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='homepage.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
 }) 
 
 
 
 
/// Import the functions you need from the SDKs you need

/*import firebase from "firebase/compat/app";
 // Required for side-effects
import "firebase/firestore";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getFirestore, setDoc,doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

 // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAdoINEQTzhgbW58zL_QyMY1rTydHAbwFE",
  authDomain: "ecomm-website-de556.firebaseapp.com",
  projectId: "ecomm-website-de556",
  storageBucket: "ecomm-website-de556.appspot.com",
  messagingSenderId: "852034148637",
  appId: "1:852034148637:web:0597d69379d2af5365a9f4"
 };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const email = document.getElemnetById('email').value;
//const password = document.getElemnetById('password').value;

const submit = document.getElemnetById('submit');
submit.addeventListener("click", function(event){
  event.preventDefault()

 const email = document.getElemnetById('email').value;
 const password = document.getElemnetById('password').value;


  createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
      const user = userCredential.user;
      alert("Creating Account...")
      window.location.href = "grand.html"
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

})*/
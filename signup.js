 /// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";          
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 
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

 
 const submit = document.getElemnetById('submit');
 submit.addeventListener("click", function(event){
   event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

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
 
 })
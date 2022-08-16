import firebase from "firebase";
require("@firebase/firestore");

  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBaIH_rqgcXesQVEDqv8rXeHW7yHUsMDBY",
    authDomain: "projeto71-95853.firebaseapp.com",
    projectId: "projeto71-95853",
    storageBucket: "projeto71-95853.appspot.com",
    messagingSenderId: "230528630273",
    appId: "1:230528630273:web:e0ad8d7079c78591070a00"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

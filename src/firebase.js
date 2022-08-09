import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0_EY72GTHbEPc3MXPhKoz8WELwMH-hEI",
    authDomain: "facebook-clone-1bb6d.firebaseapp.com",
    projectId: "facebook-clone-1bb6d",
    storageBucket: "facebook-clone-1bb6d.appspot.com",
    messagingSenderId: "15265769881",
    appId: "1:15265769881:web:b7cc94dfde4b7ed3d98b08",
    measurementId: "G-NHZRZMVG3X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
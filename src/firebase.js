import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBixW49aohT-wHwhNJMIMbvmnMPfDh25-g",
  authDomain: "netflix-clone-f0c10.firebaseapp.com",
  projectId: "netflix-clone-f0c10",
  storageBucket: "netflix-clone-f0c10.firebasestorage.app",
  messagingSenderId: "291434284280",
  appId: "1:291434284280:web:7de21f076a60cb82da670d",
  measurementId: "G-XFM6FZ57ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  }
  catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}


const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  }
  catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))

  }
}

const logout = () => {
  signOut(auth)
}

export { auth, db, login, signUp, logout }

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebaseconfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const auth = getAuth(app);

//initialize firestore database
const db = getFirestore(app);

// register user
let signUpUser = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(async (res) => {
        obj.id = res.user.uid;
        await addDoc(collection(db, "users"), obj)
        .then((res)=>{
          console.log("user added to database successfully");
        })
        .catch((err)=>{
          console.log(err);
        })
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

// login user
let loginUser = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
};

export { signUpUser , loginUser };

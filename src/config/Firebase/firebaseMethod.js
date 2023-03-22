import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebaseconfig";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const auth = getAuth(app);

//initialize firestore database
const db = getFirestore(app);

// register user
let signUpUser = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(async (res) => {
        resolve((obj.id = res.user.uid));
        await addDoc(collection(db, "users"), obj)
          .then((res) => {
            console.log("user added to database successfully");
          })
          .catch((err) => {
            console.log(err);
          });
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
      .then(async () => {
        const q = query(
          collection(db, "users"),
          where("id", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          resolve(doc.data());
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//signout User
const signOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve("user Signout Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//send data to firestore
const sendData = (obj, colName) => {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, colName), obj)
      .then((res) => {
        resolve("data send to db successfully");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//get data with id from firestore
const getData = (colName) => {
  return new Promise(async (resolve, reject) => {
    const q = query(
      collection(db, colName),
      where("id", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      resolve(doc.data());
    });
    reject("error occured");
  });
};


export { signUpUser, loginUser, auth, signOutUser, sendData, getData };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc, collection, writeBatch, addDoc, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa2aDDWj6HODT6QsMUPDC6SaAo0M-q-98",
  authDomain: "crwn-db-fd6ed.firebaseapp.com",
  projectId: "crwn-db-fd6ed",
  storageBucket: "crwn-db-fd6ed.appspot.com",
  messagingSenderId: "906850777723",
  appId: "1:906850777723:web:78c830a1d223addcfd40de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const docRef = doc(db, `users/${userAuth.uid}`);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    try {
      let { displayName, email } = userAuth;
      let createdAt = new Date();
      setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error While creating user : ", error);
    }
  }
  return docRef;
};

export const getDocSnap = async (docRef) => {
  const docSnap = await getDoc(docRef);
  return docSnap;
}
export const getCollectionByKey = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const docsCollection = await getDocs(collectionRef);
  return convertDocsCollectionToMap(docsCollection.docs);
}
export const convertDocsCollectionToMap = (docs) => {
  const mappedCollection = docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, items
    }
  });
console.log(mappedCollection);
  return mappedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
  },{}
  );

}
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const batch = writeBatch(db);

  const collectionRef = collection(db, collectionKey);
  for (let element of objectToAdd) {
    const docRef = await addDoc(collectionRef, element);
    batch.set(docRef, element);
  }
  await batch.commit();
}

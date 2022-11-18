import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZT8UkBK_ceChOjoPRPJTgR26G-Yi127I",
  authDomain: "todo-list-ed805.firebaseapp.com",
  projectId: "todo-list-ed805",
  storageBucket: "todo-list-ed805.appspot.com",
  messagingSenderId: "640511923903",
  appId: "1:640511923903:web:34dbba4675542cb4fb180a",
  measurementId: "G-CLRYFN5QVP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const currentCollection = collection(db, "tasks");

export const fetchItems = async () => {
  let items = [];
  try {
    const querySnapshot = await getDocs(currentCollection);
    querySnapshot.forEach((item) => (items = [...items, item.data()]));
    return items;
  } catch (e) {
    console.log(`error white fetching data : ${e}`);
  }
};
export const addItem = async (item) => {
  try {
    const doctRef = await addDoc(currentCollection, item);
    console.log(`added item with id : ${doctRef.id}`);
  } catch (e) {
    console.log(`error while adding item : ${e}`);
  }
};

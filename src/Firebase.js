import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {};

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

import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB } from "../config/firebase";


(function() {
    const db = FIREBASE_DB
    const uid = FIREBASE_AUTH.currentUser ? FIREBASE_AUTH.currentUser.uid : null;
    if (uid === null) {
        console.log("User ID is null, aborting task creation.");
        return;
    }
    window.reTaskCollection = collection(db, 're-task', "task");
})();

export async function createTaskFire(data) {
    const dbData = {
        ...data,
    }
    return await addDoc(window.reTaskCollection, dbData)
}
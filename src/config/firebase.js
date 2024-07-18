import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyD1Cgvy1-dRNlao9XfgOGEL12sodyOLcLo",
    authDomain: "uas-todolist-4d854.firebaseapp.com",
    projectId: "uas-todolist-4d854",
    storageBucket: "uas-todolist-4d854.appspot.com",
    messagingSenderId: "841661223540",
    appId: "1:841661223540:web:b4c6b79fec2d4c0ea7f721"
}


const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export {
    FIREBASE_APP,
    FIREBASE_AUTH,
    FIREBASE_DB,
    getFirestore,
    collection,
    addDoc
}


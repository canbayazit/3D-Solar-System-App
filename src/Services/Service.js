/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import  {client}  from './axios';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
// const starCountRef = ref(db, 'planets');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });


// export const abcde =  ()=>{

    // const { data } = await client.get('planets.json');
    // console.log(process.env.REACT_APP_PROJECT_ID);

    //     console.log("data",data);

    // const starCountRef = ref(db, '/planets');
    // onValue(starCountRef, (snapshot) => {
    //     const data2 = snapshot.val();
        // return process.env.REACT_APP_PROJECT_ID;
    //   });
// }



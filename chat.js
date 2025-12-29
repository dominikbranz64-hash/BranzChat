import { auth, db } from "./firebase.js";
import {
  collection, addDoc, query, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.send = async () => {
  await addDoc(collection(db, "messages"), {
    from: auth.currentUser.uid,
    to: toId.value,
    text: msg.value,
    time: Date.now()
  });
};

const q = query(collection(db, "messages"));
onSnapshot(q, snap => {
  chat.innerHTML = "";
  snap.forEach(d => {
    chat.innerHTML += `<li>${d.data().text}</li>`;
  });
});

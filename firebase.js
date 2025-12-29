<!-- firebase.js -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "TU_WKLEJ",
  authDomain: "TU_WKLEJ",
  projectId: "TU_WKLEJ",
  storageBucket: "TU_WKLEJ",
  messagingSenderId: "TU_WKLEJ",
  appId: "TU_WKLEJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>

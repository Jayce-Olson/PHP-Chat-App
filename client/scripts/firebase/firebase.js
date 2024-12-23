import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { initializeSignInListeners } from "./sign_in_page_listeners.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOPufovsdT_c4YC0ilx7H_c6h6sK7MY0",
  authDomain: "php-chat-app-234c2.firebaseapp.com",
  projectId: "php-chat-app-234c2",
  storageBucket: "php-chat-app-234c2.firebasestorage.app",
  messagingSenderId: "615400963477",
  appId: "1:615400963477:web:d867dcddcab27d1903ca9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

initializeSignInListeners(auth);

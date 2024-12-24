import {
  userSignIn,
  userSignOut,
  checkUserLoginStatus,
} from "./update_html_after_sign_in.js";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

export const initializeSignInListeners = (auth) => {
  let user;
  // Google Sign-In
  const googleProvider = new GoogleAuthProvider();
  document.getElementById("googleSignIn").addEventListener("click", () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        user = result.user;
        console.log(user);
        userSignIn();
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
        user = false;
      });
  });

  // Email/Password Sign-In
  document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        alert(`Welcome back, ${user.email}`);
        userSignIn();
      })
      .catch((error) => {
        console.error("Email Sign-In Error:", error.message);
        alert("Failed to sign in. Please check your credentials.");
      });
  });

  // Sign-Up Logic
  document.getElementById("sign-up-btn").addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          user = userCredential.user;
          alert(`Account created successfully! Welcome, ${user.email}`);
        })
        .catch((error) => {
          console.error("Sign-Up Error:", error.message);
          alert("Failed to create an account.");
        });
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user) userSignIn();
    if (!user) userSignOut();
  });
};

export default { initializeSignInListeners };

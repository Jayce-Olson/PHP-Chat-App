// DOM Elements
const loginForm = document.getElementById("loginForm");
const signUpButton = document.getElementById("signUpButton");
const signOutButton = document.getElementById("signOutButton");
const userSection = document.getElementById("user-section");
const authSection = document.getElementById("auth-section");
const userEmail = document.getElementById("user-email");

// Handle user state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    userEmail.textContent = user.email;
    userSection.style.display = "block";
    authSection.style.display = "none";
    document.querySelector(".sidebar").style.display = "flex";
    document.querySelector(".chat-area").style.display = "flex";

    firebase
      .auth()
      .currentUser.getIdToken()
      .then((idToken) => {
        // Send the token to the backend
        fetch("your-backend-endpoint", {
          // Put this in config and also encrypt the token
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: idToken }),
        });
      });
  } else {
    // User is signed out
    userSection.style.display = "none";
    authSection.style.display = "block";
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".chat-area").style.display = "none";
  }
});

// Handle Sign-In
loginForm.addEventListener("submit", (e) => {
  // for testing
  userSection.style.display = "block";
  authSection.style.display = "none";
  document.querySelector(".sidebar").style.display = "flex";
  document.querySelector(".chat-area").style.display = "flex";
  // e.preventDefault();
  // const email = document.getElementById("email").value;
  // const password = document.getElementById("password").value;

  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     console.log("Signed In:", userCredential.user);
  //   })
  //   .catch((error) => {
  //     console.error("Sign-In Error:", error.message);
  //   });
});

// Handle Sign-Up
signUpButton.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Signed Up:", userCredential.user);
    })
    .catch((error) => {
      console.error("Sign-Up Error:", error.message);
    });
});

// Handle Sign-Out
signOutButton.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Signed Out");
    })
    .catch((error) => {
      console.error("Sign-Out Error:", error.message);
    });
});

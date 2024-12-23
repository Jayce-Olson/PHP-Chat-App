const loginForm = document.getElementById("loginForm");
const signUpButton = document.getElementById("signUpButton");
const signOutButton = document.getElementById("signOutButton");
const userSection = document.getElementById("user-section");
const authSection = document.getElementById("auth-section");
const userEmail = document.getElementById("user-email");

export const userSignIn = () => {
  userEmail.textContent = user.email;
  userSection.style.display = "block";
  authSection.style.display = "none";
  document.querySelector(".sidebar").style.display = "flex";
  document.querySelector(".chat-area").style.display = "flex";

  const email = firebase.auth().currentUser.email;

  firebase
    .auth()
    .currentUser.getIdToken()
    .then((idToken) => {
      fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken, email: email }),
      });
    });
};

export const userSignOut = () => {
  userSection.style.display = "none";
  authSection.style.display = "block";
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".chat-area").style.display = "none";
};

export const checkUserLoginStatus = (user) => {
  if (user) userSignIn();
  if (!user) userSignOut();
};

export default { userSignIn, userSignOut, checkUserLoginStatus };

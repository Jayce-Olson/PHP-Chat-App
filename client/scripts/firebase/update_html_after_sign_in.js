export const userSignIn = () => {
  const authPage = document.getElementById("auth-page");
  const chatPage = document.getElementById("chat-app");
  const chatArea = document.getElementById("chat-area");
  const sidebar = document.getElementById("sidebar");

  const setFullHeightLayout = () => {
    authPage.style.display = "none";
    chatPage.style.display = "flex";
    chatPage.style.display = "flex";
    chatPage.style.height = `${window.innerHeight}px`;

    chatArea.style.flex = "1";
    chatArea.style.display = "flex";
    chatArea.style.flexDirection = "column";

    sidebar.style.height = "100%";
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
  };

  setFullHeightLayout();

  // Reapply the layout on window resize to handle responsive changes
  window.addEventListener("resize", setFullHeightLayout);

  // A variation of this will be used to send data to the backend
  // firebase
  //   .auth()
  //   .currentUser.getIdToken()
  //   .then((idToken) => {
  //     fetch("", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ token: idToken, email: email }),
  //     });
  //   });
};

export const userSignOut = () => {
  // userSection.style.display = "none";
  // authSection.style.display = "block";
  // document.querySelector(".sidebar").style.display = "none";
  // document.querySelector(".chat-area").style.display = "none";
};

export const checkUserLoginStatus = (user) => {
  if (user) userSignIn();
  if (!user) userSignOut();
};

export default { userSignIn, userSignOut, checkUserLoginStatus };

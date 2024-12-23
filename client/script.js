// Define an async function to initialize the application
const init = async () => {
  // Fetch endpoints from the configuration file
  const getEndpoints = async () => {
    const response = await fetch("config.json");
    const config = await response.json();
    return {
      getMessages: config.get_messages_endpoint,
      sendMessage: config.send_messages_endpoint,
    };
  };

  // retrieve endpoints
  const endpoints = await getEndpoints();

  // Add event listener to the chat form
  document.getElementById("chatForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("message").value;
    console.log("Fetching");
    fetch(endpoints.sendMessage, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `message=${encodeURIComponent(message)}`,
    })
      .then((response) => response.text())
      .then(() => {
        document.getElementById("message").value = "";
        loadMessages();
      });
    console.log("Fetched");
  });

  // Load messages using AJAX
  const loadMessages = () => {
    fetch(endpoints.getMessages)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("chatBox").innerHTML = data;
      });
  };

  // Load initial messages
  loadMessages();

  // Refresh chat every second
  setInterval(loadMessages, 1000);
};

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };

// for testing purposes
const user = true;

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
init();

document.addEventListener("DOMContentLoaded", () => {
  if (user) {
    const authPage = document.querySelector(".auth-section");
    const chatPage = document.querySelector(".chat-app");
    const chatArea = document.querySelector(".chat-area");
    const sidebar = document.querySelector(".chat-sidebar");

    // Function to set full height layout
    const setFullHeightLayout = () => {
      if (chatPage && chatArea && sidebar) {
        chatPage.style.display = "flex";
        chatPage.style.height = `${window.innerHeight}px`;

        chatArea.style.flex = "1";
        chatArea.style.display = "flex";
        chatArea.style.flexDirection = "column";

        sidebar.style.height = "100%";
        sidebar.style.display = "flex";
        sidebar.style.flexDirection = "column";
      } else {
        console.error("One or more elements could not be found in the DOM.");
      }
    };

    // Initially hide authPage and display the chatPage for demonstration
    if (authPage && chatPage) {
      authPage.style.display = "none";
      chatPage.style.display = "flex";
    } else {
      console.error("Auth page or chat page element not found.");
    }

    // Apply the full height layout on page load
    setFullHeightLayout();

    // Reapply the layout on window resize to handle responsive changes
    window.addEventListener("resize", setFullHeightLayout);
  } else {
    console.log("No user logged in.");
  }
});

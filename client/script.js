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
  });

  // Load messages using AJAX
  const loadMessages = () => {
    fetch(endpoints.getMessages)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("chatBox").innerHTML = data;
      });
  };

  // Refresh chat every second
  setInterval(loadMessages, 1000);

  // Load initial messages
  loadMessages();
};

init();

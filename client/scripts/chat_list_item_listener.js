import conversation from "conversation_class.js";

document.addEventListener("DOMContentLoaded", () => {
  const chats = {
    "global-chat": "Global Chat",
    "test-chat": "Different Chat - test",
  };

  const chatListItems = document.querySelectorAll(".chat-list li");
  const chatHeader = document.getElementById("chat-header");
  const chatBox = document.getElementById("chatBox");

  chatListItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove "active" class from all chat items
      chatListItems.forEach((li) => li.classList.remove("active"));

      // Add "active" class to the clicked chat
      item.classList.add("active");

      // Update chat header
      const chatId = item.id;
      chatHeader.textContent = chats[chatId];

      //conversation.currentConversation =
      chatBox.innerHTML = `<div>Loading messages for ${chats[chatId]}...</div>`;
    });
  });
});

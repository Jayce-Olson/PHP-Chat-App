<?php 
session_start();
if (!isset($_SESSION['user_id'])) {
    $_SESSION['user_id'] = uniqid(); // Assign a unique ID to each user
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="sidebar">
        <h2>Chats</h2>
        <ul class="chat-list">
            <li class="active" id="global-chat">Global Chat</li>
            <!-- Future chats will go here -->
        </ul>
    </div>

    <div class="chat-area">
        <div class="chat-header">Global Chat</div>
        <div id="chatBox" class="chat-box">
            <!-- Messages will be dynamically loaded here -->
        </div>
        <form id="chatForm" class="chat-input">
            <input type="text" id="message" name="message" placeholder="Type your message" autocomplete="off" required>
            <button type="submit">Send</button>
        </form>
    </div>

    <script type="text/javascript" src="script.js"></script>
</body>
</html>

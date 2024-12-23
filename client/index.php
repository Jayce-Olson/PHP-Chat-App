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
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/sign_in_page.css">
    <link rel="stylesheet" href="styles/chat_boxes.css">
    <link rel="stylesheet" href="styles/chat_area.css">
    <link rel="stylesheet" href="styles/chat_sidebar.css">
    <script type="text/javascript" src="script.js"></script>
    <script type="text/javascript" src="scripts/chat_list_item_listener.js"></script>
</head>
<body>
    <!-- Authentication Section -->
    <div class="auth-section" id="auth-page">
        <div class="auth-form">
            <h2 class="auth-title">Sign In</h2>
            <form class="login-form">
                <input type="email" class="auth-email" placeholder="Email" required />
                <input type="password" class="auth-password" placeholder="Password" required />
                <button type="submit" class="auth-signin-btn">Sign In</button>
            </form>
            <button class="auth-signup-btn">Sign Up</button>
        </div>
        <div class="user-section" style="display: none;">
            <h2 class="user-welcome">Welcome, <span class="user-email"></span></h2>
            <button class="auth-signout-btn">Sign Out</button>
        </div>
    </div>

    <!-- Chat Application Section -->
    <div class="chat-app" style="display: none;">
        <!-- Sidebar -->
        <div class="chat-sidebar"> 
            <h2 class="chat-title">Chats</h2>
            <ul class="chat-list">
                <li class="chat-item active" data-id="global-chat">Global Chat</li>
                <li class="chat-item" data-id="test-chat">Different Chat - test</li>
            </ul>
        </div>

        <!-- Chat Area -->
        <div class="chat-area">
            <div class="chat-header" id="chat-header">Global Chat</div>
            <div id="chatBox" class="chat-box">
                <!-- Messages will be dynamically loaded here -->
            </div>
            <form id="chatForm" class="chat-input">
                <input type="text" id="message" name="message" placeholder="Type your message" autocomplete="off" required>
                <button type="submit" class="chat-send-btn">Send</button>
            </form>
        </div>
    </div>
</body>
</html>


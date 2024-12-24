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
    <!-- CSS -->
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/sign_in_page/sign_in_page.css">
    <link rel="stylesheet" href="styles/chat_page/chat_boxes.css">
    <link rel="stylesheet" href="styles/chat_page/chat_area.css">
    <link rel="stylesheet" href="styles/chat_page/chat_sidebar.css">
    <link rel="stylesheet" href="styles/chat_page/sign_out_button.css">
    <!-- Firebase -->
    <script type="module" src="https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"></script>
    <script type="module" src="scripts/firebase/firebase.js"></script>
    <!-- JavaScript -->
    <script type="text/javascript" src="script.js"></script>
    <script type="text/javascript" src="scripts/chat_list_item_listener.js"></script>
</head>
<body>
    <!-- Authentication Section -->
    <div class="auth-container" id="auth-page">
        <div class="auth-card">
            <h2 class="auth-title">Sign In</h2>
            <form class="auth-form" id="auth-form">
                <input type="email" class="auth-input" placeholder="Email" required />
                <input type="password" class="auth-input" placeholder="Password" required />
                <button type="submit" class="auth-btn">Sign In</button>
            </form>
            <div class="separator">or</div>
            <button class="google-btn" id="googleSignIn">
                <img src="resources/icons/google_icon.webp" alt="Google Icon" class="google-icon" />
                Sign in with Google
            </button>
            <button class="auth-secondary-btn" id="sign-up-btn">Sign Up</button>
        </div>
    </div>



    <!-- Chat Application Section -->
    <div class="chat-app" id="chat-app" style="display: none;">


        <!-- Sidebar -->
        <div class="chat-sidebar" id="sidebar"> 
            <h2 class="chat-title">Chats</h2>
            <ul class="chat-list">
                <li class="chat-item active" data-id="global-chat">Global Chat</li>
                <li class="chat-item" data-id="test-chat">Different Chat - test</li>
            </ul>
        </div>

        <!-- Chat Area -->
        <div class="chat-area" id="chat-area">
            <!-- Header -->
            <div class="chat-header" id="chat-header">
                <span>Global Chat</span>
                <button id="signOutButton" class="sign-out-btn">Sign Out</button>
            </div>

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


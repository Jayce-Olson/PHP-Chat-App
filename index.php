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
    <title>Global Chat</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="chat-container">
        <h1>Global Chat</h1>
        <div id="chatBox" class="chat-box">
            <!-- Messages will be dynamically loaded here -->
        </div>
        <form id="chatForm">
            <input type="text" id="message" name="message" placeholder="Type your message" autocomplete="off" required>
            <button type="submit">Send</button>
        </form>
    </div>

    <script>
        // Send message using AJAX
        document.getElementById('chatForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const message = document.getElementById('message').value;
            fetch('send_message.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `message=${encodeURIComponent(message)}`
            }).then(response => response.text()).then(() => {
                document.getElementById('message').value = '';
                loadMessages();
            });
        });

        // Load messages using AJAX
        function loadMessages() {
            fetch('get_messages.php')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('chatBox').innerHTML = data;
                });
        }

        // Refresh chat every second
        setInterval(loadMessages, 1000);
    </script>
</body>
</html>

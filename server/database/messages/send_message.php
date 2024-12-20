<?php
include '../db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_SESSION['user_id'];
    $message = $_POST['message'] ?? '';

    if (!empty($message)) {
        $stmt = $pdo->prepare("INSERT INTO messages (user_id, message) VALUES (?, ?)");
        $stmt->execute([$user_id, $encrypted_message]);
    }
}
?>

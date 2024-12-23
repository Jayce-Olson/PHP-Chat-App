<?php
include '../db.php';

$stmt = $pdo->query("SELECT * FROM messages ORDER BY created_at ASC");
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($messages as $msg) {
    echo "<p><strong>User {$msg['user_id']}:</strong> {$msg['message']} <small>({$msg['created_at']})</small></p>";
}
?>

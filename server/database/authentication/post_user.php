<?php
include '../db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try{
        $firebaseUID = $_POST['firebaseUID']; // This may be removed/changed since tokens are temporary, depends what I decide to do with it.
        $email = $_POST['email'];
        $username = $_POST['username'];
    }catch(Exception $e){
        echo "Error: " . $e->getMessage();
        exit
    }
    if (isset($firebaseUID) && isset($email) && isset($username)) {
        $stmt = $pdo->prepare("INSERT INTO users (firebase_uid, username, email) VALUES (?, ?, ?)");
        try {
            $stmt->execute([$firebaseUID, "Test", $email]);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
?>

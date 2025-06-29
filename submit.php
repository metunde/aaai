<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method not allowed");
}

$title = $_POST['title'] ?? '';
$content = $_POST['content'] ?? '';

$conn = new mysqli('localhost', 'root', '', 'aaai');

if ($conn->connect_error) {
    die('Database connection failed: ' . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO posts (title, content) VALUES (?, ?)");
$stmt->bind_param("ss", $title, $content);

if ($stmt->execute()) {
    header("Location: makepost.html");
    exit();
} else {
    echo "Insert failed: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

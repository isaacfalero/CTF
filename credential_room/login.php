<?php
$servername = "db";
$username = "root";
$password = "L3G05_R_FUN!";
$dbname = "challenge_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_POST['uname'];
$pass = $_POST['psw'];

$sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    header("Location: dashboard.html");
} else {
    echo "<body style='background-color:#7fbee9;'>";
    echo "<center><h1>Invalid username or password.</h1></center>";
}

$conn->close();
?>

<?php
// This is the secret code. Change it to your preferred code.
$secret_code = 'your_secret_code';

// Start a session to store authentication status
session_start();

// Check if the form is submitted
if (isset($_POST['submit'])) {
    $entered_code = $_POST['code'];

    // Check if the entered code matches the secret code
    if ($entered_code === $secret_code) {
        $_SESSION['authenticated'] = true;
        header('Location: your-protected-page.php');
        exit;
    } else {
        $error_message = "Invalid code. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Restricted Access</h2>
    <?php
    if (isset($error_message)) {
        echo "<p style='color: red;'>$error_message</p>";
    }
    ?>
    <form method="post">
        <label for="code">Enter the code:</label>
        <input type="password" name="code" id="code" required>
        <input type="submit" name="submit" value="Submit">
    </form>
</body>
</html>

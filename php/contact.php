<?php
if (isset($_POST['submit'])) {
    $to = 'info@mukisports.com';
    $subject = 'You have an interest at Muki Sports';
    $message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
    $message .= 'Phone Number: ' . $_POST['number'] . "\r\n\r\n";
    $message .= 'Message: ' . $_POST['message'];
    $success = mail($to, $subject, $message);
}
if (isset($success) && $success) {
    header("Location: ../index.html#modal-confirmed");
    die();
}
else {
    header("Location: ../index.html#modal-denied");
    die();
}


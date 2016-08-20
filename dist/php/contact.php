<?php
if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $number = $_POST['number'];
    $enquiry = $_POST['message'];

    $name = trim($name);
    $number = trim($number);
    $enquiry = trim($enquiry);

    if (strlen($name)>0 && strlen($number)>0 && strlen($enquiry)>0){
        $to = 'info@mukisports.com';
        $subject = 'Muki Sports Enquiry';
        $message = 'Name: ' . $name . "\r\n\r\n";
        $message .= 'Phone Number: ' . $number . "\r\n\r\n";
        $message .= 'Message: ' . $enquiry;
        $success = mail($to, $subject, $message);
    }
    else{
        header("Location: ../index.html#modal-spaces");
        die();
    }
}
if (isset($success) && $success) {
    header("Location: ../index.html#modal-confirmed");
    die();
}
else {
    header("Location: ../index.html#modal-denied");
    die();
}
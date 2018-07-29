<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$formcontent="From: $name \n Message: $message \n Phone: $phone";
$recipient = "info@infinityschool.in, infinityschoool@gmail.com, vipul@infinityreach.com";
$subject = "Infinity School - Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
//echo"include";

//echo "";
include("thank-you.html");

?>
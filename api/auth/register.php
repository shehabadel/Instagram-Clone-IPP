<?php
//Headers
include_once '../../api/config/Database.php';
include_once '../../api/models/users.php';
$database = new Database();
$db = $database->connect();


$user = new User($db);


if(isset($_POST['reg_btn'])){
    $name = strip_tags(($_POST['name']));
    $username= strip_tags(($_POST['username']));
    #Remove whitespaces from username
    $username = str_replace(' ','',$username);

    $email= strip_tags(($_POST['email']));
    $password= strip_tags(($_POST['password']));
    $pp_URL= strip_tags(($_POST['pp_URL']));

    $email_check = mysqli_query($database->$conn,"SELECT email FROM users WHERE email='$email'");

    $emails_num= mysqli_num_rows($email_check);
    if($emails_num>0){
        echo "Email already in use";
    }
}
?>
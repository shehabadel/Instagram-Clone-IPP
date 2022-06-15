<?php
//Headers
session_start();
include '../../api/config/Database.php';
include '../../api/models/users.php';
$database = new Database();
$db = $database->connectI();
$user = new User($db);

if (isset($_POST['reg_btn'])) {
    $email_exists=false;
    $name = strip_tags(($_POST['name']));
    $_SESSION['reg_name']=$name; //Storing name in a session variable
    $username = strip_tags(($_POST['username']));
    #Remove whitespaces from username
    $username = str_replace(' ', '', $username);
    $_SESSION['reg_username']=$username;
    
    $email = strip_tags(($_POST['email']));
    $_SESSION['reg_email']=$email;
    
    $password = strip_tags(($_POST['password']));
    
    $pp_URL = strip_tags(($_POST['pp_URL']));
    $_SESSION['reg_pp_URL']=$pp_URL;
    $email_check = mysqli_query($db, "SELECT email FROM users WHERE email='$email'");
    $username_check = mysqli_query($db,"SELECT username FROM users WHERE username='$username'");

    $emails_num = mysqli_num_rows($email_check);
    $usernames_num = mysqli_num_rows($username_check);
    #Check if email already exists if number of emails bigger than 0
    if ($emails_num > 0) {
        echo "<p class='text-main'>Email already in use</p>";
    }else if($usernames_num > 0){
        echo "<p class='text-main'>Username already in use</p>";
    }
    else{
        $password=md5($password); //Encrypt password before sending to database
        $user->username=$username;
        $user->password=$password;
        $user->email=$email;
        $user->pp_URL=$pp_URL;
        $user->name=$name;
        $user->isAdmin=false;

        echo $user->username.$user->password.$user->email.$user->name.$user->isAdmin;
        $query= mysqli_query($db,
    "INSERT INTO users VALUES ('','$name','$username','$email','$password','0',false,'$pp_URL')");
    if($query){
        echo "<p class='main-text'>Account created successfully!!! You can login now</p>";
        //Clear session variables
        $_SESSION['reg_name']="";
        $_SESSION['reg_email']="";
        $_SESSION['reg_username']="";
        $_SESSION['reg_pp_URL']="";
    }else{
        echo "<p class='main-text'>Account wasn't created!!!</p>";
    }
}
} 
?>
<html>
<head>
    <title>
        Signup Page
    </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/index.css">
    <link rel="stylesheet" href="Signup.css">
</head>
<body>
    <main>

        <div class="signup-box">
            <h1>Sign Up</h1>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST">
            <label id="fn">Name</label>
            <input type="text" placeholder="Name" name="name" required
            value=
            "<?php if(isset($_SESSION['reg_name'])){
                echo $_SESSION['reg_name'];
            }?>"
            />
            <label>Username</label>
            <input type="text" placeholder="Username" name="username" required
            value=
            "<?php if(isset($_SESSION['reg_username'])){
                echo $_SESSION['reg_username'];
            }?>"
            />
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" required 
            value=
            "<?php if(isset($_SESSION['reg_email'])){
                echo $_SESSION['reg_email'];
            }?>"
            />
            <label>Profile Picture</label>
            <input type="tel" placeholder="Profile Picture Link" name="pp_URL" required
            value=
            "<?php if(isset($_SESSION['reg_pp_URL'])){
                echo $_SESSION['reg_pp_URL'];
            }?>"
            />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" required />
            <input type="submit" class="btn main-button main-text mt-2" value="Sign Up" name="reg_btn" />
        </form>
        <p class="para-2">
            Already have an account? <a href="../Login/Login.html">Login here</a>
        </p>
    </div>
</main>
</body>
</html>
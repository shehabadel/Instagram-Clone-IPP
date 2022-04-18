<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!--Start Google Fonts API-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">
    <!--End Google Fonts API-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="../../css/index.css">
    <link rel="stylesheet" type="text/css" href='../../css/home.css'>
    <title>Home</title>
</head>

<body class="main-bg">
    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-4">
        <div class="container">
            <a class="navbar-brand" href="#">Traversy Media</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/index.php">Add Feedback</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/feedback.php">Past Feedback</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about.php">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <div class="container-fluid">
            <div id="left-col" class="col-sm-1 col-md-2">
                <div class="card bg-transparent main-text border-0 profile-card" style="width: 18rem;">
                    <div class="card-header border-0">
                        <!--Fetch user's avatar here-->
                        <img id="profile-avatar" src="../../assets/avatar-blank.png" class="card-img-top avatar profile-avatar" alt="...">
                    </div>
                    <div class="card-body">
                        <a>
                            <!--Fetch user's name here-->
                            <h4 id="profile-name" class="fw-600">Shehab Adel</h4>
                        </a>
                        <!--Fetch user's username here-->
                        <h6 id="profile-username" class="secondary-text">@shehabirl</h6>
                    </div>
                </div>
                <div class="left-col-nav">
                    <ul class="list-group bg-transparent">
                        <li class="list-group-item" aria-current="true">
                            <!--Link to home page-->
                            <a>
                                <span><i class="fa-solid fa-house"></i></span>
                                <p>
                                    Home
                                </p>
                        </li>
                        </a>
                        <li class="list-group-item">
                            <!--Link to profile page-->
                            <a>
                                <span><i class="fa-solid fa-user"></i></span>
                                <p>
                                    Profile
                                </p>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <!--Link to home page-->
                            <a>
                                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                <p>
                                    Search
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-5 text-center">
                    <button id="write-post-btn" class="btn main-button main-text"><span><i class="fa-solid fa-pen"></i></span><p>Write Post</p></button>
                </div>
            </div>
            <div id="mid-col" class="col-sm-10 col-md-8">
            </div>
            <div id="right-col" class="col-sm-1 col-md-2"></div>
        </div>
    </main>
    <!--Scripts-->
    <?php include 'C:\xampp\htdocs\Instagram-Clone-IPP\inc\scripts.php' ?>
    <script src="./home.js"></script>
    <?php include 'C:\xampp\htdocs\Instagram-Clone-IPP\inc\footer.php' ?>
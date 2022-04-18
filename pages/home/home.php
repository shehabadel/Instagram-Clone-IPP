<?php include './inc/head.php'; ?>

<body>
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
        <div class="container d-flex flex-column align-items-center">
            <?php include './inc/scripts.php'; ?>
    <?php include './inc/footer.php';?>
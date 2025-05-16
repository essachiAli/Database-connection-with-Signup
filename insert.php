<?php 

    if ($_SERVER['REQUEST_METHOD'] == "POST"){
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $status = $_POST['userType'];
    try {
        require_once "connection.php";
        $sql = "INSERT INTO users (username, email, password, status)
                VALUES (?, ?, ?, ?);";
        $query = $handler->prepare($sql);
        $query->execute(array($username, $email, $password, $status));
        $handler = null;
        $query = null;
        header( "Location: index.html");
        die();
    }catch(PDOException $e){
        die("<br>Error in inserting data!" . $e->getMessage());
    }
    }else {
        header("Location: ./index.html");
    }

    
?>
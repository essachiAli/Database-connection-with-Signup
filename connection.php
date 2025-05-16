<?php
    $servername = "server";
    $db_username = "user";
    $dbname = "database";
    $db_password = "password";
    $dsn = "mysql:host=$servername;dbname=$dbname;";
    try {
        $handler = new PDO($dsn, $db_username, $db_password);
        $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo "" . $e->getMessage();
        die();
    }
?>
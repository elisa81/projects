<?php
    $conn = new mysqli("localhost", "root", "chewon21", "zdb");
    if($conn->connect_errno)
    die('Connect error:'.$conn->connect_error);

    mysqli_set_charset($conn, 'utf8');

    $result = $conn->query("select * from USER");
    $output = array();

    $output = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
?>
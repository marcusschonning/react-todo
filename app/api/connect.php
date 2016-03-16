<?php

$db = new mysqli('localhost', 'root', '', 'test_todolist');

if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}
mysqli_set_charset($db, 'utf8');

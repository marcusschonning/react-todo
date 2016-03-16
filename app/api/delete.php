<?php
require 'connect.php';

$stmt = $db->prepare("DELETE FROM todolist WHERE id = ?");
$stmt->bind_param('i', $_GET['id']);
$stmt->execute();
echo 'success';
$stmt->close();

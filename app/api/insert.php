<?php
require './connect.php';

if (isset($_GET['todo'])) {
	$stmt = $db->prepare("INSERT INTO todolist(todo) VALUES (?)");
	$stmt->bind_param('s', $_GET['todo']);
	$stmt->execute();
	$id = $stmt->insert_id;
	echo $id;
	$stmt->close();
}

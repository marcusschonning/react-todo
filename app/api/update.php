<?php
require 'connect.php';

if (isset($_GET['todoId']) && isset($_GET['completed'])) {
	$completed = 0;
	if ($_GET['completed'] == 'true') {
		$completed = 1;
	}
	$stmt = $db->prepare("UPDATE todolist SET todolist.completed = ? WHERE id = ?");
	$stmt->bind_param('ii', $completed, $_GET['todoId']);
	$stmt->execute();
	echo 'success';
	$stmt->close();
}

<?php
require 'connect.php';

$query = $db->query("SELECT * FROM `todolist`");
$result = [];
if ($query->num_rows > 0) {
    // output data of each row
    while($row = $query->fetch_assoc()) {
    	$result[] = array(
    		'id' => $row['id'],
    		'todo' => $row['todo'],
    		'completed' => $row['completed']
    	);
    }
} else {
    echo 'false';
}
echo json_encode($result, JSON_FORCE_OBJECT);
$db->close();

<?php
	$user = 'root';
	$pass = 'root'; // ON MAC $pass = 'root';
	$host = 'localhost';
	$db = "a3_cooperInfo";

//TRY connecting to the server
	$conn = mysqli_connect($host, $user, $pass, $db);

	mysqli_set_charset($conn, 'utf8');  //this helps JS read the databse


	if(!$conn){  // if server does not connect properly
		echo 'uh oh it broken';
		exit;
	}
	//echo 'connected!';
	if(isset($_GET['getVideos'])){
		$myQuery = 'SELECT * FROM video';
		$results = mysqli_query($conn, $myQuery);
		$rows = array();
		while ($row = mysqli_fetch_assoc($results)){
			$rows[] = $row;
		}
		echo json_encode($rows); //show it on the page
	}

	if(isset($_GET["carModel"])){
		$car = $_GET["carModel"];

	$myQuery = "SELECT * FROM mainmodel WHERE model = '$car'"; //select 1 car not 3
	$result = mysqli_query($conn, $myQuery); // store the result
	$row =  mysqli_fetch_assoc($result);  // get the row
	echo json_encode($row);

	}
?>

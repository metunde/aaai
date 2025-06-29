<?php


$servername = "localhost";
$username = "root";
$password = "";
$db_name = "aaaingdb";

$con = new mysqli($servername, $username, $password, $db_name);
if($con->connect_error){
   die("Error connecting to server: ".$con->error);
}
echo "success";
?>
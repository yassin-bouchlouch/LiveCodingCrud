<?php

include('db.php');
$id=$_POST['sId'];
$DeleteQuery = $connection ->query("DELETE FROM schoolstudents WHERE id=$id ");
$executeDeleteQuery = $DeleteQuery ->execute();
echo 'deltedOk';
?>


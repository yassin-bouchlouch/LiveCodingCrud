
<?php
include('db.php');
$studentsQuery = $connection ->query("SELECT * FROM schoolstudents");
$executeQ=$studentsQuery->fetchAll(PDO::FETCH_ASSOC);

echo (json_encode($executeQ));

?>



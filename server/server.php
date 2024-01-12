<?php
$database = file_get_contents(__DIR__ . '/discs.json');

$discs = json_decode($database);

echo json_encode($discs);




header('Content-Type: application/json');

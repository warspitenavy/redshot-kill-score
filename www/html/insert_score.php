<?php
require_once 'get_database.php';

// header('Content-Type: application/json; charset=UTF-8');

$json = file_get_contents('php://input');
$request = json_decode($json, true);

$victim = (string)$request['victim'];
$attacker = (string)$request['attacker'];
$weapon = (string)$request['weapon'];

if (empty($victim) || empty($attacker) || empty($weapon)) {
  die;
}

try {
  $db = get_database();

  $statement = $db->prepare(
    'INSERT INTO kd_score(`victim`, `attacker`, `weapon`, `datetime`)
    VALUES (:victim, :attacker, :weapon, :datetime);'
  );
  $array = array(
    'victim' => $victim,
    'attacker' => $attacker,
    'weapon' => $weapon,
    'datetime' => date('Y-m-d H:i:s')
  );
  $statement->execute($array);
  echo json_encode($array);
} catch (PDOException $e) {
} finally {
  $db = null;
}

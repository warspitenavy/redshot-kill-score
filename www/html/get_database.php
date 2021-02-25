<?php

$ini = parse_ini_file('./database.ini');

define('DBNAME', $ini['database'] . ';');
define('HOST', $ini['host'] . ';');
define('CHARSET', $ini['charset'] . ';');
define('USER', $ini['user']);
define('PASSWORD', $ini['password']);

function get_database(): PDO
{
  return new PDO(
    'mysql:dbname=' . DBNAME .
      'host=' . HOST .
      'charset=' . CHARSET,
    USER,
    PASSWORD
  );
}

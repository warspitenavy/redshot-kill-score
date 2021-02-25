<?php
require_once 'get_database.php';

$database = get_database();
$database->query('create table if not exists kd_score (
    id int auto_increment not null primary key,
    victim char(36),
    attacker char(36),
    weapon varchar(255),
    datetime datetime
) DEFAULT CHARSET=utf8mb4');

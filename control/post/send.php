<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

$param = json_decode(file_get_contents("php://input"));

$dados_json = json_encode($param);
echo $dados_json;

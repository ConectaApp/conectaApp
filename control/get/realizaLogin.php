<?php
session_start();
require '../../dao/ConexaoPDO.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

$data = json_decode(file_get_contents("php://input"));

$queryBuscaLogin = "SELECT * FROM usuario
                    WHERE login = '{$data->login}'
                    AND senha = '{$data->pass}'";

// print_r($queryBuscaLogin);
$PDO = new ConexaoPDO();
$resultado_array = $PDO->RunSelect($queryBuscaLogin);
$id = $resultado_array[0]['id'];
$login = $resultado_array[0]['login'];
$senha = $resultado_array[0]['senha'];
if ($login != '' || $senha != '') {
  $dados_json = $id;
}else{
  $dados_json = '';
}
$_SESSION['id'] = $id;
// Tranforma o array $dados em JSON
// $dados_json = json_encode($PDO);
echo $dados_json;


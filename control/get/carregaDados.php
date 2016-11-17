<?php
require '../../dao/ConexaoPDO.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

$data = json_decode(file_get_contents("php://input"));
$dados_json = $data;


$queryBuscaLogin = "SELECT * FROM usuario
                    WHERE id =  $data";

$PDO = new ConexaoPDO();
$resultado_array = $PDO->RunSelect($queryBuscaLogin);
$login = $resultado_array[0]['login'];

// $usuario = array(
//     'nome'             => $resultado_array[0]['login'],
// );
$dados_json = $login;
// $dados_json = json_encode($dados);
echo $dados_json;

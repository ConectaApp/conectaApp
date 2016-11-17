<?php
require '../../dao/ConexaoPDO.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

$data = json_decode(file_get_contents("php://input"));

// $cliente1 = array(
//     'nome'             => $data->nome,
//     'login'            => $data->login,
//     'senha'            => $data->pass
// );


$query  = "
  INSERT INTO usuario
    (
        nome
      , login
      , senha
    )
  VALUES
    (
       '{$data->nome}'
      ,'{$data->login}'
      ,'{$data->pass}'
    )
";
$PDO = new ConexaoPDO();
$PDO->RunQuery($query);

// Atribui os 3 arrays para apenas um array
$dados = array($cliente1);

// Tranforma o array $dados em JSON
$dados_json = json_encode($dados);
echo $dados_json;

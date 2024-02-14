<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$data = json_decode(file_get_contents('php://input'), true);

$mail = new PHPMailer(true);
   
$mail->IsSMTP();     
            
$mail->CharSet="UTF-8"; 

$mail->SMTPSecure = $_ENV['SMTP_SECURE'];   

$mail->Host = $_ENV['SMTP_HOST'];

$mail->Port = $_ENV['SMTP_PORT'];

$mail->SMTPOptions = [
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true,
    ]
];

$mail->SMTPAuth = true;

//$mail->SMTPDebug = 2;

$mail->Username = $_ENV['SMTP_USER'];

$mail->Password = $_ENV['SMTP_PASS'];

$mail->From = $_ENV['SMTP_USER'];

$mail->FromName = 'MYM Developers';

//Email de destino
$mail->AddAddress('marcko236@gmail.com');

//activar HTML
$mail->IsHTML(true);

$mail->Subject = 'Contacto MYM Developers';

$mail->Body = ' 
<html> 
<head> 
<title>Solicitud</title> 
</head> 
<body> 
<h1>Nueva solicitud desde MyM Developers</h1> 
<p> <b>Enviado por: </b>'.$data['name'].' | '.$data['email'].'</p> 
<p> <b>Mensaje: </b>'.$data['message'].'</p> 
</body> 
</html> 
';


if ($mail->Send()) {
    echo json_encode(array('success' => true, 'message' => 'Email sent successfully.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Error sending email.'));
}

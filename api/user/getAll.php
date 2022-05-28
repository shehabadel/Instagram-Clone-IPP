<?php 
//Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../models/users.php';

$database = new Database();
$db = $database->connect();


$user = new User($db);

$data = $user->getAll();

if($data->rowCount() > 0){
    $users_arr = array();

    $user_arr['data']=array();

    while($row=$data->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $user_item=array(
            'id'=>$id,
            'name'=>$name,
            'username'=>$username,
            'email'=>$email,
            'pp_URL'=>$pp_URL,
            'no_of_friends'=>$no_of_friends
        );
        array_push($user_arr['data'],$user_item);
    }
    echo json_encode($user_arr);
}
else{
    echo json_encode(array('message'=>'No users found'));
}
?>
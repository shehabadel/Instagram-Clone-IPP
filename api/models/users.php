<?php

class User{
    private $conn;
    private $table= 'users';

    public $id;
    public $name;
    public $isAdmin;
    public $no_of_friends;
    public $pp_URL;
    public $email;
    public $username;
    public $password;

    public function __construct($db){
        $this->conn=$db;
    }

    public function getAll(){
        $query = 'SELECT * FROM '.$this->table.' ';

        $stmt=$this->conn->prepare($query);

        if($stmt->execute()){
            return $stmt;
        }else{
            return false;
        }

    }
    public function getByID(){
        $query = 'SELECT * FROM '. $this->table .' WHERE id = :id';
        
        $stmt= $this->conn->prepare($query);

        $this->id= htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':id',$this->id);

        $stmt->execute();

        $row= $stmt->fetch(PDO::FETCH_ASSOC);
        $this->name= $row['name'];
        $this->username= $row['username'];
        $this->email= $row['email'];
        $this->no_of_friends= $row['no_of_friends'];
        $this->pp_URL= $row['pp_URL'];
        $this->isAdmin= $row['isAdmin'];
    }
}
?>
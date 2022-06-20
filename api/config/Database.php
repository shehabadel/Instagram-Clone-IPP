<?php
class Database {
    private $host = 'localhost'; //ip or host
    private $db_name = 'instaclone';
    private $username = 'root';
    private $password = '123456';
    private $port='3306';
    //Bad, very bad practice but until we can see what we can do
    private $conn;

    //DB Connect PDO
    public function connect() {
        $this->conn = null;
        try {
            $this->conn =new PDO('mysql:host='. $this->host .';port='.$this->port. ';dbname=' . $this->db_name,$this->username, $this->password); //takes DSN (database type) and host
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch (PDOException $e) {
            echo 'Connection Error' . $e->getMessage();
        }
        return $this->conn;
    }
    //DB Connect MYSQLI
    public function connectI(){
        $this->conn = null;
        try {
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
            if ($this->conn->connect_error) {
                throw new Exception("Connection Exception", 1);
            }
        } catch (Exception $e) {
            die('Connection failed' . $this->conn->connect_error);
        }
        return $this->conn;
    }
}
?>

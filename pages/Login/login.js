function signin(user,pass){
    var j=-1;
    for(var i =0 ; i< ourData.length; i++){
        if (ourData[i].username==user){
            j=i;
        }
    }
   
    if (j == -1 || ourData[j].Admin==true ){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Username or Password";
    }else if (ourData[j].password==pass && ourData[j].Admin==false){
        window.location.replace("../home/home.html");
         /// CHANGE PAGE TRANSITION TO HOME PAGE
        ourData[j].loggedIn= true;
    }else{
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Username or Password";
    }

    if (!user | !pass){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Please Enter Username and Password";
    }

   
}

function signAdminin(user,pass){
    var j=-1;
    for(var i =0 ; i< ourData.length; i++){
        if (ourData[i].username==user){
            j=i;
        }
    }
    if (j == -1 || ourData[j].Admin== false){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Admin Username or Password";
    }else if (ourData[j].password==pass && ourData[j].Admin==true){
        window.location.replace("../Admin/admin.html");
         /// CHANGE PAGE TRANSITION TO ADMIN HOME PAGE
        ourData[j].loggedIn= true;
    }else{
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Username or Password";
    }

    if (!user | !pass){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Please Enter Username and Password";
    }
   
}
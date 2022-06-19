function signin(user,pass){
    var j=-1;
    for(var i =0 ; i< ourData.length; i++){
        if (ourData[i].username===user){
            console.log(ourData[i])
            j=i;
            break;
        }
    }
   
    if (j == -1 || ourData[j].Admin==true ){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Username or Password";
    }else if (ourData[j].password==pass && ourData[j].Admin==false){
        //In order to retreive user's data in the home or admin's pages
        ourData[j].loggedIn= true;
        window.location.replace("../home/home.html?"+ourData[j].username);
         /// CHANGE PAGE TRANSITION TO HOME PAGE
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
        //In order to retreive user's data in the home or admin's pages
        window.location.replace("../Admin/admin.html?"+ourData[j].username);
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
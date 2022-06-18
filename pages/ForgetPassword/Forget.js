function forget(email,numb){
    var j=-1;
    for(var i =0 ; i< ourData.length; i++){
        if (ourData[i].email==email){
            j=i;
        }
    }
    if (j == -1 ){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Email or Phone Number";
    }else if (ourData[j].phoneNum==numb){
        window.location.replace("../ChangePassword/ChangePassword.html");
    }else{
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Incorrect Email or Phone Number";
    }

    if (!email | !numb){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Please Enter Email and Phone Number";
    }
}
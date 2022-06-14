function changepass (pass , passconf ){
    var l=-1;
    if (!pass | !passconf){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Please Enter Password and Password Confirmation";
    }else if (pass !=passconf){
        document.getElementById("error").style.opacity= 100; 
        document.getElementById("error").textContent= "Incorrect Inforamtion";
        document.getElementById("confError").style.opacity=100;
    }else{
        document.getElementById("confError").style.opacity=0;
        document.getElementById("error").style.opacity= 0;  
        console.log(pass);
        l =1;
    }

    if(l!= -1)
    //CHANGE TRANSITION TO HOMEPAGE
    window.location.replace("../search and explore/search.html");
    
     console.log("signup button clicked");
     for (var i = 0; i < ourData.length; i++) 
             console.log(ourData[i]);
     
     }
    
 
 
 
function changepass (pass , passconf ){
var j=-1;
var k=-1;
var l=-1;
var m=-1;

    if(pass.length<8){
        
        document.getElementById("passError").style.opacity=100;
        document.getElementById("passError").textContent="* Password must be at least 8 charaters";
        m=1;
    }else if(pass.length>15){
       
        document.getElementById("passError").style.opacity=100;
        document.getElementById("passError").textContent="* Password must be less than 15 charaters";
        m=1;
    }else if (!pass | !passconf){
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Please Enter Password and Password Confirmation";
        l=1;
    }else if (pass !=passconf){
        document.getElementById("confError").style.opacity=100;
        document.getElementById("confError").textContent= "* Password does not macth";
        document.getElementById("error").style.opacity= 100; 
        document.getElementById("error").textContent= "Incorrect Inforamtion";
        l =1;
        
    }else{
        document.getElementById("confError").style.opacity=0;
        document.getElementById("passError").style.opacity=0;
        document.getElementById("error").style.opacity= 0;  
        console.log(pass);
    }

    if (l == -1){
        document.getElementById("confError").style.opacity= 0;
    }
    if (m == -1){
        document.getElementById("passError").style.opacity= 0;
    }
    if(l == -1 && m == -1)
    //CHANGE TRANSITION TO HOMEPAGE
    window.location.replace("../search and explore/search.html");

     console.log("signup button clicked");
     for (var i = 0; i < ourData.length; i++) 
             console.log(ourData[i]);
     
     }
    
 
 
 
function signup (name , username , email , numb , pass , passconf , admin){

   var j=-1;
   var k=-1;
   var l=-1;
    for(var i =0 ; i< ourData.length; i++){
      
        if (ourData[i].username==username ){
            j=i;
            document.getElementById("error").style.opacity= 100;
            document.getElementById("error").textContent= "Invalid Information";
            document.getElementById("astricsName").style.opacity=100;
        }
    
        if (ourData[i].email==email){
            k=i;
            document.getElementById("error").style.opacity= 100;
            document.getElementById("error").textContent= "Invalid Information";
            document.getElementById("astricsEmail").style.opacity=100;
        }
       
        
    } 
    if (pass !=passconf){
        l=1;
        document.getElementById("error").style.opacity= 100;
        document.getElementById("error").textContent= "Invalid Information";
        document.getElementById("confError").style.opacity=100;
        }
    
    if (j == -1){
        document.getElementById("astricsName").style.opacity= 0;
    }
    if (k == -1){
        document.getElementById("astricsEmail").style.opacity= 0;
    }
    if (l == -1){
        document.getElementById("confError").style.opacity= 0;
    }

    if (j== -1 && k ==-1 && l== -1 ){
        document.getElementById("error").style.opacity= 0;
        if(!name && !username && !email && !numb && !pass && !passconf){
            document.getElementById("error").style.opacity= 100;
            document.getElementById("error").textContent= "Invalid Information";        }
        else{
            if (admin == false){
            ourData.push( {username:username, displayName:name ,profilePic:"../../assets/avatar-blank.png", email:email ,password:pass , phoneNum:numb, loggedIn:true , Admin:false});
            window.location.replace("../search and explore/search.html");
             /// CHANGE PAGE TRANSITION TO HOME PAGE
            }else{
            ourData.push( {username:username, displayName:name ,profilePic:"../../assets/avatar-blank.png", email:email ,password:pass , phoneNum:numb, loggedIn:true , Admin:true});
            window.location.replace("../search and explore/search.html");
            /// CHANGE PAGE TRANSITION TO ADMIN HOME PAGE
            }
        }
    }

   

}

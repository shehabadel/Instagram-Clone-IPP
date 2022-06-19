//console.log(postsData);
var queryString = location.search.substring(1);
//console.log(queryString);
var profileUser;
for (i = 0; i < ourData.length; i++) {
    if (ourData[i].loggedIn == true) {
        profileUser = ourData[i];
    }
}
if(profileUser){
    //console.log(document.querySelector("#profile-avatar").src);
    document.getElementById("profile-avatar").src = profileUser.profilePic;
    document.getElementById("profile-name").textContent = profileUser.displayName;
    document.getElementById("profile-username").textContent = profileUser.username;
    document.getElementById("profilehyperlink").href = "../profile/Profile.html?"+profileUser.username;
    document.getElementById("profilehyperlink2").href = "../profile/Profile.html?"+profileUser.username;
    document.getElementById("profilehyperlink3").href = "../profile/Profile.html?"+profileUser.username;
    document.getElementById("posthyperlink").href = "makepost.html?"+profileUser.username;
    document.getElementById("searchhyperlink").href = "../search/search.html?" + profileUser.username;
    document.getElementById("homelink").href="../home/home.html?"+profileUser.username;
}


function uploadNoCaption(){
    console.log("upload no caption button pressed");
    postsData[postsData.length]=new Object();
    postsData[postsData.length-1].postCreator=profileUser.username;
    postsData[postsData.length-1].postImage= document.getElementById("file-1").value;

    console.log(postsData);
}

function uploadWithCaption(){
    console.log("upload with caption button pressed");
    postsData[postsData.length]=new Object();
    postsData[postsData.length-1].postCreator=profileUser.username;
    postsData[postsData.length-1].postContent=document.getElementById("captionContent").value;
    console.log(document.getElementById("captionContent").value);
    postsData[postsData.length-1].postImage= document.getElementById("file-1").value;

    console.log(postsData);
}


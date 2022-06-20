console.log("opened");
var queryString = location.search.substring(1);
console.log(queryString);
var profileUser;
for (i = 0; i < ourData.length; i++) {
    if (ourData[i].username == queryString) {
        visitedUser = ourData[i];
    }
    if(ourData[i].loggedIn==true){
        profileUser = ourData[i];
    }
}

if(profileUser.username != visitedUser.username){
    document.getElementById("personalEdits").style.display="none"; 
}
console.log(profileUser.profilePic);
if (profileUser) {
    console.log(document.querySelector("#profile-avatar").src);
    document.getElementById("profile-avatar").src = profileUser.profilePic;
    document.getElementById("profile-name").textContent = profileUser.displayName;
    document.getElementById("profile-username").textContent = profileUser.username;

    document.getElementById("homelink").href="../home/home.html?"+profileUser.username;
    document.getElementById("profile_pic").src = visitedUser.profilePic;
    document.getElementById("name").textContent = visitedUser.displayName;
    document.getElementById("username").textContent = visitedUser.username;

    document.getElementById("profilehyperlink").href = "Profile.html?"+profileUser.username;
    document.getElementById("profileURL").href = "Profile.html?"+profileUser.username;
    document.getElementById("postLink").href = "../makepost/makepost.html?"+profileUser.username;
    document.getElementById("searchhyperlink").href = "../search/search.html?"+profileUser.username;

    
    document.querySelector('.friendlist').addEventListener('click',function () {
        window.location.replace('../friends/friends.html?'+profileUser.username);
    })
    document.querySelector('.editprofile').addEventListener('click',function () {
        window.location.replace('../edit profile/editprofile.html?'+profileUser.username);
    })
    console.log("finished");

}


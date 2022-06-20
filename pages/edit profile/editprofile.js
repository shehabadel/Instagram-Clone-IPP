for (i = 0; i < ourData.length; i++) {
    if (ourData[i].loggedIn == true) {
        profileUser = ourData[i];
    }
}

console.log(profileUser);
console.log(ourData);
if (profileUser) {
    console.log(document.querySelector("#profile-avatar").src);
    document.getElementById("profile-avatar").src = profileUser.profilePic;
    document.getElementById("profile-name").textContent = profileUser.displayName;
    document.getElementById("profile-username").textContent = profileUser.username;

    document.getElementById("profilehyperlink").href = "../profile/Profile.html?" + profileUser.username;
    document.getElementById("profileURL").href = "../profile/Profile.html?" + profileUser.username;
    document.getElementById("postLink").href = "../makepost/makepost.html?" + profileUser.username;
    document.getElementById("searchhyperlink").href = "../search/search.html?" + profileUser.username;
    document.getElementById("homelink").href="../home/home.html?"+profileUser.username;
    
    document.getElementById("username").value = profileUser.username;
    document.getElementById("displayname").value = profileUser.displayName;
    document.getElementById("imgsrc").src = profileUser.profilePic;
    document.getElementById("email").value = profileUser.email;
    document.getElementById("password").value = profileUser.password;
    document.getElementById("phonenumber").value = profileUser.phoneNum;

}


/*for (i = 0; i < ourData.length; i++) {
    if (ourData[i].loggedIn) {
        document.getElementById("imgsrc").src = ourData[i].profilePic;
    }
}*/


function editData() {
    console.log("submit button clicked");
    for (var i = 0; i < ourData.length; i++) {
        if (ourData[i].loggedIn == true) {
            if (document.getElementById("username").value != "") {
                ourData[i].username = document.getElementById("username").value;
            }
            if (document.getElementById("displayname").value != "") {
                ourData[i].displayName = document.getElementById("displayname").value;
            }
            if (document.getElementById("imginput").value != "") {
                ourData[i].profilePic = document.getElementById("imginput").value;
            }
            if (document.getElementById("email").value != "") {
                ourData[i].email = document.getElementById("email").value;
            }
            if (document.getElementById("password").value != "") {
                ourData[i].password = document.getElementById("password").value;
            }
            if (document.getElementById("phonenumber").value != "") {
                ourData[i].phoneNum = document.getElementById("phonenumber").value;
            }
            console.log(profileUser);
            console.log(ourData);
            alert("Your data is updated successfully!");
        }

    }
}



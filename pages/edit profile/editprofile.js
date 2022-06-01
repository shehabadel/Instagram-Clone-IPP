function editData() {
    console.log("submit button clicked");
    for (var i = 0; i < ourData.length; i++) {
        if (ourData[i].loggedIn == true) {
            //ourData[datacount] = new Object();
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
            //datacount++;
            console.log(ourData);
            alert("Your data is updated successfully!");
        }

    }
}

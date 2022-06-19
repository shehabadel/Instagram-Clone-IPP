var randNum;
var queryObj = document.querySelectorAll("td>img");
console.log(queryObj);

for (i = 0; i < ourData.length; i++) {
    if(ourData[i].loggedIn==true){
        profileUser = ourData[i];
    }
}

console.log(profileUser.profilePic);
if (profileUser) {
    console.log(document.querySelector("#profile-avatar").src);
    document.getElementById("profile-avatar").src = profileUser.profilePic;
    document.getElementById("profile-name").textContent = profileUser.displayName;
    document.getElementById("profile-username").textContent = profileUser.username;

    document.getElementById("profilehyperlink").href = "../profile/Profile.html?"+profileUser.username;
    document.getElementById("profileURL").href = "../profile/Profile.html?"+profileUser.username;
    document.getElementById("postLink").href = "../makepost/makepost.html?"+profileUser.username;
    document.getElementById("searchhyperlink").href = "../search/search.html?"+profileUser.username;
    //Redirect to homepage with profile's username
    document.getElementById("homelink").href="../home/home.html?"+profileUser.username;
    console.log("finished");

}


var grid = [ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0],
ourData[0]];

for (var i = 0; i < 12; i++) {
    console.log(i);
    randNum = Math.floor(Math.random() * ourData.length);
    var selectedObj = queryObj[i];
    selectedObj.src = ourData[randNum].profilePic;
    grid[i] = ourData[randNum];

}

var img0 = document.getElementById("img0");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");


img0.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[0]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[0].username, "_balnk");

});

img1.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[1]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[1].username, "_balnk");

});

img2.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[2]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[2].username, "_balnk");

});

img3.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[3]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[3].username, "_balnk");

});

img4.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[4]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[4].username, "_balnk");

});

img5.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[5]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[5].username, "_balnk");

});

img6.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[6]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[6].username, "_balnk");

});

img7.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[7]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[7].username, "_balnk");

});

img8.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[8]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[8].username, "_balnk");

});

img9.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[9]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[9].username, "_balnk");

});

img10.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[10]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[10].username, "_balnk");

});

img11.addEventListener('click', function handleClick() {
    console.log("clicked");
    console.log(grid[11]);
    //window.open("../profile/Profile.html?"+grid[0], "_self");
    window.open("../profile/Profile.html?"+grid[11].username, "_balnk");

});

function search() {
    let input = document.getElementById('searchBar');
    var inputVal = "";
    if (input) {
        inputVal = input.value;
    }
    console.log(inputVal);
    let disp = document.getElementById('searchResults');
    disp.textContent = "";
    for (i = 0; i < ourData.length; i++) {
        if (inputVal != "") {
            if (ourData[i].displayName.includes(inputVal) || ourData[i].username.includes(inputVal)) {
                console.log("found");
                console.log(ourData[i].displayName);
                if (disp) {
                    var newitem=document.createElement("li");
                    var newitemURL=document.createElement("a");
                    disp.appendChild(newitem);
                    newitem.appendChild(newitemURL);
                    newitemURL.textContent=ourData[i].displayName;
                    newitemURL.href="../profile/Profile.html?"+ourData[i].username;
                    //disp.textContent += ourData[i].displayName + "\n";
                }
            }
        }

    }
    if (disp.textContent == "") {

        disp.textContent = "No results were found!";
    }
}



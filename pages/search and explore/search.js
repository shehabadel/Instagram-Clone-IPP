var randNum;
var queryObj = document.querySelectorAll("td>a>img");
console.log(queryObj);
for (var i = 0; i < 12; i++) {
    console.log(i);
    randNum = Math.floor(Math.random() * ourData.length);
    var selectedObj = queryObj[i];
    selectedObj.src = ourData[randNum].profilePic;
    console.log(ourData[randNum].profilePic);
    
}

var jsonFriends = [{
	friendID:"12371723",
	friendURL:"",
	friendName:"Zyad Yakan",
	friendAvatar:'../../assets/avatar-blank.png'
},
{
    "friendID": "ingy",
    "friendName": "Ingy Mysara",
    "friendAvatar": "../../assets/profiles/profile-6.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "ola",
    "friendName": "Ola Alnajjar",
    "friendAvatar": "../../assets/profiles/profile-9.jpeg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :true
,
"friendURL":''},{
    "friendID": "reem",
    "friendName": "Reem Aboushama",
    "friendAvatar": "../../assets/profiles/profile-4.png",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": true,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "Farida",
    "friendName": "Farida Mahamed",
    "friendAvatar": "../../assets/profiles/profile-3.jpeg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "Nour",
    "friendName": "Nour Mohamed",
    "friendAvatar": "../../assets/profiles/profile-2.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "farah",
    "friendName": "Farah Kamaly",
    "friendAvatar": "../../assets/profiles/profile-10.png",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "mariam",
    "friendName": "Mariam Tamer",
    "friendAvatar": "../../assets/profiles/profile-5.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "hossam",
    "friendName": "Hossam Mansour",
    "friendAvatar": "../../assets/profiles/profile-7.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "salma",
    "friendName": "Salma Osama",
    "friendAvatar": "../../assets/profiles/profile-6.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "hana",
    "friendName": "Hana Ahmed",
    "friendAvatar": "../../assets/profiles/profile-9.jpeg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "jana",
    "friendName": "Jana Khaled",
    "friendAvatar": "../../assets/profiles/profile-2.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "mahmoud",
    "friendName": "Mahmoud Mohamed",
    "friendAvatar": "../../assets/profiles/profile-5.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "mohab",
    "friendName": "Mohab Galal",
    "friendAvatar": "../../assets/profiles/profile-4.png",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "omar",
    "friendName": "Omar Ahmed",
    "friendAvatar": "../../assets/profiles/profile-3.jpeg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "shehab",
    "friendName": "Shehab Adel",
    "friendAvatar": "../../assets/profiles/profile-7.jpg",
    "email": "123@456.com",
    "password": "12345678",
    "phoneNum": "0123456789",
    "loggedIn": false,
    "Admin" :false,
	"friendURL":''
}
]
$('document').ready(function () {
    simGETUserData()
    SimGETfriends()

})
function SimGETfriends() {
	var friendsList = $('.friends-list')
	for(let i=0; i<jsonFriends.length; i++){
		var friend = `
		<a href="${jsonFriends[i].friendURL}" id="${jsonFriends[i].friendID}">
                                    <div id="friend" class="friend">
                                        <!--fetch list of friend's avatar here-->
                                        <div class="friend-avatar">
                                            <img alt="${jsonFriends[i].friendName}'s Avatar" src="${jsonFriends[i].friendAvatar}" class="card-img-top avatar avatar-sm profile-avatar">
                                        </div>
                                        <!--fetch list of friend's name here-->
                                        <div class="friend-name-wrapper">
                                            <p class="friend-name"> ${jsonFriends[i].friendName}</p>
                                        </div>
                                    </div>
                                </a>
		`
		friendsList.append(friend)
	}
}
function simGETUserData() {
    var profilePic = $('#profile-avatar')
    var profileUsername = $('#profile-username')
    var profileHyperLink = $('.profile-hyperlink')
    var profileName = $('#profile-name');
    
    
    /**
     * Fetch username from the query string from the URL, and based on it
     * if it doesnot exist, then re-direct to login page, if it exists,
     * then fetch the user's data and replace it in the nav bar like Name, username, and profile picture
     */
    var queryString = location.search.substring(1);
    console.log(queryString);
    if(!queryString){
        window.location.replace("../Login/Login.html");
    }
    var profileUser;
    for (i = 0; i < ourData.length; i++) {
    if (ourData[i].username == queryString) {
        visitedUser = ourData[i];
        console.log(profileUser)
    }
    if(ourData[i].loggedIn==true){
        profileUser = ourData[i];
        console.log(profileUser)
    }
    }
    
    //Appending url with query string representing the profile's username for all hyperlinks
    if (profileUser) {
    //profile hyperlinks
    $('#profilehyperlink').attr('href',"../profile/Profile.html?"+profileUser.username)
    $('.profile-hyperlink').attr('href',"../profile/Profile.html?"+profileUser.username)
    $("#profileURL").attr('href',"../profile/Profile.html?"+profileUser.username)
    //make post hyperlink
    $("#postLink").attr('href',"../makepost/makepost.html?"+profileUser.username)
    //Search hyperlink
    $("#searchhyperlink").attr('href',"../search/search.html?"+profileUser.username)
    //Home page hyperlink
    $("#homelink").attr('href',"../home/home.html?"+profileUser.username)
    console.log("finished");
    
    }


    /**
 * Updating the Navigation bar html with the user's data fetched from database.js
 */
profilePic.attr('src',profileUser.profilePic)
profileUsername.text(profileUser.username)
profileName.text(profileUser.displayName)
profileHyperLink.attr('href',"../profile/Profile.html?"+profileUser.username)

}

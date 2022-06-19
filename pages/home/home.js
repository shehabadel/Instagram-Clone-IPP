$('document').ready(function () {
	getUserData()
	SimGETposts()
	updateCommentsNumber()
	SimGETfriends()
	$('.click').click(function () {
		var click = $(this)
		var parent = $(this).parent()
		var favNumbElement = parent.find('.favorites-number p');

		var fav_num = parseInt(favNumbElement.text())
		var icon = $(this).find('.fa-heart')
		var info = $(this).find('.info')
		console.log(icon)

		if (icon.hasClass("fa-solid")) {
			fav_num -= 1
			favNumbElement.text(fav_num)
			click.removeClass('active')
			setTimeout(function () {
				click.removeClass('active-2')
			}, 30)
			click.removeClass('active-3')
			setTimeout(function () {
				icon.removeClass('fa-solid')
				icon.addClass('fa-regular')
			}, 15)
		} else {
			fav_num += 1
			favNumbElement.text(fav_num)
			click.addClass('active')
			click.addClass('active-2')
			setTimeout(function () {
				icon.addClass('fa-solid')
				icon.removeClass('fa-regular')
			}, 150)
			setTimeout(function () {
				click.addClass('active-3')
			}, 150)
			info.addClass('info-tog')
			setTimeout(function () {
				info.removeClass('info-tog')
			}, 1000)
		}
	})

	$('.comments-btn').on('mouseenter', function (e) {
		var commentIcon = $(this).find('i')
		if (commentIcon.hasClass("fa-regular fa-comment")) {
			commentIcon.removeClass('fa-regular fa-comment')
			commentIcon.addClass('fa-solid fa-comment')
		} else {
			commentIcon.removeClass('fa-solid fa-comment')
			commentIcon.addClass('fa-regular fa-comment')
		}
	})
	$('.comments-btn').on('mouseleave', function (e) {
		var commentIcon = $(this).find('i')
		if (commentIcon.hasClass("fa-solid fa-comment")) {
			commentIcon.removeClass('fa-solid fa-comment')
			commentIcon.addClass('fa-regular fa-comment')
		} else {
			commentIcon.removeClass('fa-regular fa-comment')
			commentIcon.addClass('fa-solid fa-comment')
		}
	})

	$('.post-flag').on('click', function () {
		var flagIcon = $(this).find('i')
		if (flagIcon.hasClass("fa-solid fa-flag")) {
			flagIcon.removeClass('fa-solid fa-flag')
			flagIcon.addClass('fa-regular fa-flag')
		} else {
			flagIcon.removeClass('fa-regular fa-flag')
			flagIcon.addClass('fa-solid fa-flag')
		}
	})


	$('.comments-btn').on('click', function (e) {
		var postInteractions = $(this).parents('.post-interactions')
		var commentWrapper = postInteractions.siblings('.comments-wrapper')
		var hr = commentWrapper.next('hr')
		if (commentWrapper.hasClass('d-none')) {
			commentWrapper.removeClass('d-none')
			commentWrapper.addClass('d-block')
			commentWrapper.after('<hr>')
		} else {
			commentWrapper.addClass('d-none')
			commentWrapper.removeClass('d-block')
			hr.remove()
		}
	})
	/**
	 * Add comment from comment input on pressing enter
	 */
	$('.comment-input-text').on('keypress', function (e) {
		if (e.which == 13) {
			e.preventDefault()
			var commentText = $(this).val()
			var date = new Date()
			var commentInput = $(this).parents('.comment-input')
			var commentWrapper = commentInput.siblings('.comments-wrapper')
			let commentPost = `<div id="${'commentid' + date.getTime()}" class="comment mb-1">
			<div class="comment-meta">
				<!--fetch comment's user avatar here-->
				<a href="#" id="commentid-avatar-link">
					<!--Fetch user's avatar here-->
					<img id="commentid-avatar" src="../../assets/avatar-blank.png" class="card-img-top avatar avatar-sm profile-avatar" alt="...">
				</a>
				<!--fetch comment user's name here-->
				<a href="#" id="commentid-user-name-link" class="ms-2">
					<p id="commentid-user-name">Shehab Adel</p>
				</a>
			</div>
			<div class="comment-text my-2">
				<!--fetch comment text here-->
				<p>${commentText}</p>
			</div>
			<!--fetch comment date here-->
			<span>${date.toDateString()}</span>
		</div>`
			commentWrapper.append(commentPost)
			$(this).val('')
			updateCommentsNumber()
		}
	})
})

/**
 * Simulates loaded data from the database.
 */
var date = new Date();
var jsonPosts = [
	{
		postID: '12392',
		postUser: 'Zyad Yakan',
		postUsername: '@ZyadYakan',
		postUserAvatar: '../../assets/avatar-blank.png',
		postDate: date.toDateString(),
		postText: `Hello ya shemo`,
		postImg: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg`,
		postFavorites: 86,
		postComments: [{
			commentID: "128372",
			commentUser: "Shehab Adel",
			commentAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg",
			commentText: "Hello World",
			commentDate: date.toDateString()
		},
		{
			commentID: "128372",
			commentUser: "Shehab Adel",
			commentAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg",
			commentText: "Hello World",
			commentDate: date.toDateString()
		},
		{
			commentID: "128372",
			commentUser: "Shehab Adel",
			commentAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg",
			commentText: "Hello World",
			commentDate: date.toDateString()
		},
		{
			commentID: "128372",
			commentUser: "Shehab Adel",
			commentAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg",
			commentText: "Hello World",
			commentDate: date.toDateString()
		},
		{
			commentID: "128372",
			commentUser: "Shehab Adel",
			commentAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg",
			commentText: "Hello World",
			commentDate: date.toDateString()
		}
		]
	}]
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

/**
 * Simulates making a GET Request on all posts from the database and loading it inside posts-wrapper
 */
function SimGETposts() {
	var postsWrapper = $('.posts-wrapper')
	for (let i = 0; i < jsonPosts.length; i++) {
		let post = `<div id="${jsonPosts[i].postID}" class="post mb-3">
		<div class="card main-post text-white">
			<div class="card-header">
				<div class="post-info">
					<div class="post-info-wrapper">
						<div class="post-info-avatar">
							<!--Fetch user's avatar here-->
							<a href="#" class="profile-hyperlink">
								<!--Fetch user's avatar here-->
								<img id="profile-avatar" src="${jsonPosts[i].postUserAvatar}" class="card-img-top avatar profile-avatar" alt="...">
							</a>
						</div>
						<div class="post-info-meta">
							<!--Fetch user's name here-->
							<a href="#" class="profile-hyperlink">
								<p>${jsonPosts[i].postUser}</p>
							</a>
							<!--Fetch post's Date here-->
							<!--Must redirects to the post's page-->
							<a href="#" class="post-hyperlink">
								<p>${jsonPosts[i].postDate}</p>
							</a>
						</div>
					</div>
					<div class="post-flag">
						<form>
							<!--report post-->
							<button type="button" class="btn btn-secondary text-center" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
								<span class="flagIcon">
									<i class="fa-regular fa-flag"></i>
								</span>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div class="card-body post-data">
				<!--Replace fetched post text here-->
				<p class="card-text post-text">${jsonPosts[i].postText}</p>
				<!--Replace fetched post image src here-->
				<div class="post-img-wrapper">
					<img class="post-img" src="${jsonPosts[i].postImg ? jsonPosts[i].postImg : ''}">
				</div>
				<div class="post-interactions mt-2">
					<div class="click mr-3">
						<i class="fa-regular fa-heart"></i>
						<div class="ring"></div>
						<div class="ring2"></div>
						<p class="info">Added to favourites!</p>
					</div>
					<!--Fetch number of favorites here-->
					<div class="favorites-number mr-3">
						<p>${jsonPosts[i].postFavorites}</p>
					</div>
					<div class="comments-btn mx-3">
						<i class="transition fa-regular fa-comment"></i>
					</div>
					<div class="comments-number mx-3">
						<!--Fetch Number of comments here-->
						<p></p>
					</div>
				</div>
				<br>
				<hr>
				<div class="comments-wrapper d-none">`+
			jsonPosts[i].postComments.map((e) => {
				return `
					<div id="${e.commentID}" class="comment mb-1">
						<div class="comment-meta">
							<!--fetch comment's user avatar here-->
							<a href="#" id="commentid-avatar-link">
								<!--Fetch user's avatar here-->
								<img id="commentid-avatar" src="${e.commentAvatar}" class="card-img-top avatar avatar-sm profile-avatar" alt="...">
							</a>
							<!--fetch comment user's name here-->
							<a href="#" id="commentid-user-name-link" class="ms-2">
								<p id="commentid-user-name">${e.commentUser}</p>
							</a>
						</div>
						<div class="comment-text my-2">
							<!--fetch comment text here-->
							<p>${e.commentText}</p>
						</div>
						<!--fetch comment date here-->
						<span>${e.commentDate}</span>
					</div>
				`
			})
			+ `
				</div>
				<div class="comment-input">
					<!--Add post comment endpoint here and fetch postID-->
					<form id="comment-input-form" method="POST" action="">
						<div class="comment-input-wrapper">
							<a href="#" id="commentinput-avatar-link" class="profile-hyperlink">
								<!--Fetch user's avatar here-->
								<img id="profile-avatar" src="../../assets/avatar-blank.png" class="card-img-top avatar profile-avatar" alt="...">
							</a>
							<input type="text" class="comment-input-text" placeholder="Write your comment here!">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>`

		postsWrapper.append(post)
	}
}

/**
 * Simulates making a GET request on all friends list from the database and loading it inside friends-list
 */
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

/**
 * Dynamically update number of comments
 */
function updateCommentsNumber() {
	$('.comments-number').each(function () {
		var postInteractions = $(this).parents('.post-interactions')
		var commentsWrapper = postInteractions.siblings('.comments-wrapper')
		var numberOfComments = commentsWrapper.children().length
		$(this).children('p').text(numberOfComments)
	})
}

/**
 * Simulates loading profile username, name and profile picture from session or cookie
 */
function getUserData() {
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



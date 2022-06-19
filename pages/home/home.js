var profileUser;
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
					<p id="commentid-user-name">${profileUser.username}</p>
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
	},
	{
		postID: '12392',
		postUser: 'Farida',
		postUsername: '@Ferry',
		postUserAvatar: '../../assets/avatar-blank.png',
		postDate: date.toDateString(),
		postText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam quasi recusandae architecto, voluptatum debitis repudiandae, animi molestiae porro facere culpa voluptatibus quo aliquam cum similique! Harum, quia consequatur. Veniam!		`,
		postImg: `https://play-lh.googleusercontent.com/in_ppyRUzNVWPGkGah5XVtpTg4dNJPdOtkajAAEZFsaEGN2KvXN7xTOskFdrj_Q4PLk`,
		postFavorites: 86,
		postComments: [{
			commentID: "128372",
			commentUser: "Shehab Adel",
			commentAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg",
			commentText: "Hello World",
			commentDate: date.toDateString()
		},
		]
	},
	{
		postID: '12392',
		postUser: 'Shawkt Ghareeb',
		postUsername: '@ShawktGhareebxD',
		postUserAvatar: '../../assets/avatar-blank.png',
		postDate: date.toDateString(),
		postText: `Ana t3bt bgd bgd bgd eh el a5bar bt3mlo eh ana Shawky Ghareeb el 7a2e2y`,
		postImg: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg`,
		postFavorites: 86,
		postComments: [
			{
				commentID: "128372",
				commentUser: "ِAboHesebaa",
				commentAvatar: "data:image/jpeg;base64,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",
				commentText: "Enta hthzr ma3ana?",
				commentDate: date.toDateString()
			}
		]
	},
	{
		postID: '12392',
		postUser: 'Reem Aboshama',
		postUsername: '@reem',
		postUserAvatar: '../../assets/avatar-blank.png',
		postDate: date.toDateString(),
		postText: `ANA ANGREEYE`,
		postImg: `https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2021/05/27142230/RELOADED_202104_600x600_Icon.png`,
		postFavorites: 86,
		postComments: [
		]
	},]
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
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "ola",
    "friendName": "Ola Alnajjar",
    "friendAvatar": "../../assets/profiles/profile-9.jpeg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :true
,
"friendURL":''},{
    "friendID": "reem",
    "friendName": "Reem Aboushama",
    "friendAvatar": "../../assets/profiles/profile-4.png",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "loggedIn": true,
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "Farida",
    "friendName": "Farida Mahamed",
    "friendAvatar": "../../assets/profiles/profile-3.jpeg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "Nour",
    "friendName": "Nour Mohamed",
    "friendAvatar": "../../assets/profiles/profile-2.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "farah",
    "friendName": "Farah Kamaly",
    "friendAvatar": "../../assets/profiles/profile-10.png",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "mariam",
    "friendName": "Mariam Tamer",
    "friendAvatar": "../../assets/profiles/profile-5.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "hossam",
    "friendName": "Hossam Mansour",
    "friendAvatar": "../../assets/profiles/profile-7.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "salma",
    "friendName": "Salma Osama",
    "friendAvatar": "../../assets/profiles/profile-6.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "hana",
    "friendName": "Hana Ahmed",
    "friendAvatar": "../../assets/profiles/profile-9.jpeg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "jana",
    "friendName": "Jana Khaled",
    "friendAvatar": "../../assets/profiles/profile-2.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "mahmoud",
    "friendName": "Mahmoud Mohamed",
    "friendAvatar": "../../assets/profiles/profile-5.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "mohab",
    "friendName": "Mohab Galal",
    "friendAvatar": "../../assets/profiles/profile-4.png",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "omar",
    "friendName": "Omar Ahmed",
    "friendAvatar": "../../assets/profiles/profile-3.jpeg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
    "Admin" :false,
	"friendURL":''
},{
    "friendID": "shehab",
    "friendName": "Shehab Adel",
    "friendAvatar": "../../assets/profiles/profile-7.jpg",
    "email": "123@456.com",
    "phoneNum": "0123456789",
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



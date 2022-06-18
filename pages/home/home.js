$('document').ready(function () {
	updateCommentsNumber()
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
}]
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
function updateCommentsNumber() {
	$('.comments-number').each(function () {
		var postInteractions = $(this).parents('.post-interactions')
		var commentsWrapper = postInteractions.siblings('.comments-wrapper')
		var numberOfComments = commentsWrapper.children().length
		$(this).children('p').text(numberOfComments)
	})
}

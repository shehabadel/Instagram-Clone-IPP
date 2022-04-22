var fav_num = parseInt($('.favorites-number p').text())
console.log(fav_num)
$('.click').click(function() {
	if ($('.click i').hasClass("fa-solid")) {
		fav_num-=1
		$('.favorites-number p').text(fav_num)
		$('.click').removeClass('active')
		setTimeout(function() {
			$('.click').removeClass('active-2')
		}, 30)
			$('.click').removeClass('active-3')
		setTimeout(function() {
			$('.click i').removeClass('fa-solid')
			$('.click i').addClass('fa-regular')
		}, 15)
	} else {
		fav_num+=1
		$('.favorites-number p').text(fav_num)
		$('.click').addClass('active')
		$('.click').addClass('active-2')
		setTimeout(function() {
			$('.click i').addClass('fa-solid')
			$('.click i').removeClass('fa-regular')
		}, 150)
		setTimeout(function() {
			$('.click').addClass('active-3')
		}, 150)
		$('.info').addClass('info-tog')
		setTimeout(function(){
			$('.info').removeClass('info-tog')
		},1000)
	}
})

$('.comments-btn').on('mouseenter',function(e){
	var commentIcon = $('.comments-btn i')
	if(commentIcon.hasClass("fa-regular fa-comment"))
	{
		commentIcon.removeClass('fa-regular fa-comment')
		commentIcon.addClass('fa-solid fa-comment')
	}else{
		commentIcon.removeClass('fa-solid fa-comment')
		commentIcon.addClass('fa-regular fa-comment')
	}
})
$('.comments-btn').on('mouseleave',function(e){
	var commentIcon = $('.comments-btn i')
	if(commentIcon.hasClass("fa-solid fa-comment"))
	{
		commentIcon.removeClass('fa-solid fa-comment')
		commentIcon.addClass('fa-regular fa-comment')
	}else{
		commentIcon.removeClass('fa-regular fa-comment')
		commentIcon.addClass('fa-solid fa-comment')
	}
})
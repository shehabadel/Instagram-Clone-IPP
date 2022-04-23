
$('.click').click(function() {
	var click = $(this)
	var parent=$(this).parent()
	var favNumbElement = parent.find('.favorites-number p');

	var fav_num=parseInt(favNumbElement.text())
	var icon = $(this).find('.fa-heart')
	var info = $(this).find('.info')
	console.log(icon)

	if (icon.hasClass("fa-solid")) {
		fav_num-=1
		favNumbElement.text(fav_num)
		click.removeClass('active')
		setTimeout(function() {
			click.removeClass('active-2')
		}, 30)
			click.removeClass('active-3')
		setTimeout(function() {
			icon.removeClass('fa-solid')
			icon.addClass('fa-regular')
		}, 15)
	} else {
		fav_num+=1
		favNumbElement.text(fav_num)
		click.addClass('active')
		click.addClass('active-2')
		setTimeout(function() {
			icon.addClass('fa-solid')
			icon.removeClass('fa-regular')
		}, 150)
		setTimeout(function() {
			click.addClass('active-3')
		}, 150)
		info.addClass('info-tog')
		setTimeout(function(){
			info.removeClass('info-tog')
		},1000)
	}
})

$('.comments-btn').on('mouseenter',function(e){
	var commentIcon = $(this).find('i')
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
	var commentIcon = $(this).find('i')
	if(commentIcon.hasClass("fa-solid fa-comment"))
	{
		commentIcon.removeClass('fa-solid fa-comment')
		commentIcon.addClass('fa-regular fa-comment')
	}else{
		commentIcon.removeClass('fa-regular fa-comment')
		commentIcon.addClass('fa-solid fa-comment')
	}
})

$('.post-flag').on('click',function(){
	var flagIcon=$(this).find('i')
	if (flagIcon.hasClass("fa-solid fa-flag")) {
		flagIcon.removeClass('fa-solid fa-flag')
		flagIcon.addClass('fa-regular fa-flag')
	} else {
		flagIcon.removeClass('fa-regular fa-flag')
		flagIcon.addClass('fa-solid fa-flag')
	}
})


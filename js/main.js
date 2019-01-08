function loading(){
//fadeout the loading page
	$('.loading_overlay .spinner').fadeOut(1000, function(){
		$(this).parent().fadeOut(1000, function(){
			// show the scroll
			$("body").css("overflow","auto");
		});
	});
}

//start jquery
$(function(){

		// burger menu
		$('#burger-nav').on("click",function(){

			$('header nav ul').toggleClass('open');

		});
});
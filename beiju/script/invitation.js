$(function(){
	$(".heart").click(function(){
		$(".opening").addClass("on");
	});
	$(".opening").one('webkitTransitionEnd transitionend', function(){
		$(".content").fadeIn();
	});
	var name=location.search.substring(1);
	$(".name").html(name);
});

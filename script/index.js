$(function(){
	$(".opening").click(function(){
		$(this).slideUp();
		$(".heart").addClass("on");
		document.title="";
	});
	$(".heart img:last-child")[0].addEventListener("animationend", p1_p2);
	$(".heart img:last-child")[0].addEventListener("webkitAnimationEnd", p1_p2);
	function p1_p2(){
		$(".heart img").css("opacity",1);
		$(".bg").addClass("on");
		$(".heart").css("will-change", "auto");
		$(".heart img:last-child").css("will-change", "auto");
	}
	$(".bg")[0].addEventListener("transitionend", p2_p3);
	$(".bg")[0].addEventListener("webkitTransitionEnd", p2_p3);
	function p2_p3(){
		console.log("小琪琪是大笨蛋");
		console.log("小琪琪是大骗纸");
		$(".text").addClass("on");
	}
});

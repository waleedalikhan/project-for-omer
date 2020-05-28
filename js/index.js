AOS.init();

$(window).scroll(function () {
	let position = $(this).scrollTop();
	if (position >= 160) {
		$('nav').addClass('custom-nav')
			.removeClass('my-nav');
	} else {
		$('nav').addClass('my-nav')
			.removeClass('custom-nav');
	}
});



$(function () {
	// Add smooth scrolling to all links
	$('.nav-link').click(function () {
		$(this).addClass('active').removeClass('my-links').siblings().addClass('my-links').removeClass('active');
	});
	$('side-bar-links').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	$("#open-menu").on('click', function () {
		$('#side-bar').css({
			left: "60%",
			boxShadow: "0 0 30px 5px #000"
		});
	});
	$("#open-menu2").on('click', function () {
		$('#side-bar').css("left", "0");
	});
	$(".close-menu").on('click', function () {
		$('#side-bar').css({
			left: "100%",
			boxShadow: "none"
		});
	});
	$("#backToTop").on('click', function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
	$(".toHome").on('click', function () {
		$("#about").css("padding-top", "0");
		$("#resume").css("padding-top", "0");
		$("#skills").css("padding-top", "0");
		$("#pricing").css("padding-top", "0");
	});
	$(".toAbout").on('click', function () {
		$("#about").css("padding-top", "90px");
		$("#resume").css("padding-top", "0");
		$("#skills").css("padding-top", "0");
		$("#pricing").css("padding-top", "0");
	});
	$(".toSkills").on('click', function () {
		$("#about").css("padding-top", "0");
		$("#resume").css("padding-top", "0");
		$("#skills").css("padding-top", "90px");
		$("#pricing").css("padding-top", "0");
	});
	$(".toPricing").on('click', function () {
		$("#about").css("padding-top", "0");
		$("#resume").css("padding-top", "0");
		$("#pricing").css("padding-top", "90px");
		$("#skills").css("padding-top", "0");
	});
	$(".toResume").on('click', function () {
		$("#about").css("padding-top", "0");
		$("#resume").css("padding-top", "90px");
		$("#skills").css("padding-top", "0");
	});
	$(".toBlog").on('click', function () {
		$("#about").css("padding-top", "0");
		$("#resume").css("padding-top", "0");
		$("#skills").css("padding-top", "0");
		$("#pricing").css("padding-top", "0");
	});
	$(".toContact").on('click', function () {
		$("#about").css("padding-top", "0");
		$("#resume").css("padding-top", "0");
		$("#skills").css("padding-top", "0");
		$("#pricing").css("padding-top", "0");
	});
});

window.onscroll = function () { scrollUp(); };

let scrollTopBtn = document.getElementById("backToTop");

function scrollUp() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollTopBtn.style.display = "block";
	} else {
		scrollTopBtn.style.display = "none";
	}
}

$("[data-addui=typing]").addTyping({

	// animation speed
	speed: 2000,

	// Each key stroke's speed will vary (+ or -) up to this amount (milliseconds) giving it a more human like look.
	variance: 50,

	// delete text after completed
	backspace: true,

	// delay
	pause: 1500,

	// shows the blinking cursor
	caret: true

});


if (window.innerWidth <= 888) {
	$('body').scrollspy({ target: '#side-nav', offset: 100 });
}

if (window.innerWidth >= 991) {
	$("#side-nav .side-bar-item a").removeClass("active");
	$('body').scrollspy({ target: '.navbar', offset: 100 });
}
$(document).pjax('.pjaxable, .sidebar_inner ul li a', 'div.main-content');

$(document).on('pjax:send', function () {
	Reader.Site.Loader(true);
});
$(document).on('pjax:complete', function () {
	Reader.Site.Loader(false);
});
$(document).on('pjax:click', function (e) {
	$('.sidebar_inner ul li').removeClass('active');
	$(e.target).parent('li').addClass('active');
});

var pathArray = window.location.pathname.split('/');
$('ul#main-nav li').removeClass('active');
$('ul#main-nav li a[data-section="' + (pathArray[1] ? pathArray[1] : 'home') + '"]').parent('li').addClass('active');
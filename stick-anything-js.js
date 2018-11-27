var $sticky, stickyNavTop, 
$stickyAnchor, stickyHeight;

$(document).ready(function() {
	$sticky = $('.sticky');
	stickyNavTop = $sticky.offset().top;
	$stickyAnchor = $sticky.prev('.sticky-anchor');
	$stickyAnchor.height(0);
	stickyNav();
});
$(document).scroll(stickyNav);

function stickyNav() {
	
	try{
	
	stickyHeight = $sticky.height();
	$stickyAnchor.height(stickyHeight);
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
        $sticky.addClass('sticked');
        $stickyAnchor.show();
    } else {
        $sticky.removeClass('sticked');
        $stickyAnchor.hide();
    }
	}catch(e){}
}

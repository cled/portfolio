/**
*	Bootstrap the javascript
*/

$(document).ready(function () {
	
	var opts = {
		controls: {
			playPause: {auto: true},
			previousSlide: {auto: true},
			nextSlide: {auto: true},
			index: {auto: false}
		}
	};
	$('.rs-slideshow').rsfSlideshow(opts);
	
});

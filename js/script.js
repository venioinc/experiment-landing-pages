$(function() {
	analytics.initialize({
	'Google Analytics' : 'UA-38271132-1',
	'Mixpanel' : {
					token:'16ed4d07e7761ffc4813bf58166a957f'
				}
	});

	var link = $('.convert');

	analytics.trackLink(contact, 'Clicked to Convert');
	
	var contact = $('#contact_us');
	
	analytics.trackLink(contact, 'Clicked to Contact');
	
	$('.carousel').carousel({
		pause: null,
		interval: 15000
	}).bind('slide', function(event) {
		console.log(event);
		var elm = $(event.relatedTarget);
		var index = elm.parent().children().index(elm);
		
		$('#pager a.active').removeClass('active');		
		
		var pager_elem = $('#pager a')[index];
		$(pager_elem).addClass('active');
	});
	
	$('#pager a').click(function(event) {
		event.preventDefault();
		var elm = $(event.currentTarget);
		
		var index = elm.parent().children().index(elm);
		
		$('.carousel').carousel(index);
		$('#pager a.active').removeClass('active');		
		
		var pager_elem = $('#pager a')[index];
		$(pager_elem).addClass('active');
	});
});

/* custom cycle animation for micoach masthead */

(function($) {
  $.fn.cycle.transitions.venioSlider = function($cont, $slides, opts) {
    var $el = $($slides[0]);
    var w = $el.width();
    w = w + w/3;
    var h = $el.height();
    opts.before.push(function(curr, next, opts, fwd) {
      if (opts.rev)
        fwd = !fwd;
      $.fn.cycle.commonReset(curr,next,opts);
      var c = 1.3;
      var a = next.cycleW * c;
      var b = curr.cycleW * c;
      opts.cssBefore.left = fwd ? (a-1) : (1-a);
      opts.animOut.left = fwd ? -b : b;
    });
    opts.cssBefore = { top : 0, opacity : 0, zIndex : 1, display : 'block' };
    opts.animIn = { left : 0, opacity : 1 };
    opts.animOut = { opacity : 0 };
    opts.cssAfter = { zIndex : 0, display : 'none' };
    opts.easing = 'easeInOutQuad';
  };
})(jQuery);
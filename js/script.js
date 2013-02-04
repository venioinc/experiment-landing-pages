$(function() {
	$("#features .slider-image .screens").cycle({
		fx: 'venioSlider',
		delay: 1000,
		pager: $('#pager')
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
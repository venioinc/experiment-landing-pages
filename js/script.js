$(function() {
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

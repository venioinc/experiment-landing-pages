$(function() {
	analytics.initialize({
	'Google Analytics' : 'UA-38271132-1',
	'Mixpanel' : {
					token:'16ed4d07e7761ffc4813bf58166a957f'
				}
	});

	analytics.track("Visited Homepage");
    analytics.pageview();

	var link = $('.convert');

	analytics.trackLink(contact, 'Clicked to Convert');
	
	var contact = $('#contact_us');
	
	analytics.trackLink(contact, 'Clicked to Contact');
	
	$('.carousel').carousel({
		pause: null,
		interval: 15000
	}).bind('slide', function(event) {
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

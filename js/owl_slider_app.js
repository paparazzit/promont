$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 50,
	nav: true,
	dots: false,
	// center: true,
	autoWidth: false,
	autoplay: true,
	autoplayTimeout: 3500,
	autoplaySpeed: 1500,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			autoWidth: true,
			center: true,
			margin: 150,
		},
		1076: {
			items: 2,
		},
		1675: {
			items: 3,
		},
	},
});

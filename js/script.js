let showSlider;

document.addEventListener('DOMContentLoaded', function () {

	showSlider = new Swiper('.carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1300,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-nav__next',
			prevEl: '.showcase-nav__prev'
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});

	document.querySelector('video').playbackRate = 2;

	setMedia()
})



function setMedia() {

	const items = document.querySelectorAll(".swiper-slide");
	items.forEach(item => {
		const w = item.offsetWidth;
		const h = item.offsetHeight;
		if (h >= w * 5 / 4) {
			let top = (h - w * 5 / 4) / 2 - 40;
			item.children[0].children[0].style.top = `${top}px`;
			top = (h - w * 5 / 4) / 2 + w * 5 / 4 + 20;
			item.children[0].children[2].style.top = `${top}px`;
		} else {
			let top = - 40;
			item.children[0].children[0].style.top = `${top}px`;
			top = h + 20;
			item.children[0].children[2].style.top = `${top}px`;
		}


	})
}


window.addEventListener('resize', setMedia);

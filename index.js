'use strict';

// hamburger
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
// navbar
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
	navbar.classList.toggle('change');
	menu.classList.toggle('change');
});

body.addEventListener('keyup', function (ev) {
	if (ev.code === 'Escape' && navbar.classList.contains('change')) {
		navbar.classList.toggle('change');
		menu.classList.toggle('change');
	}
});

// video
const [video, bar, btn] = document.querySelectorAll(
	'.video, .video-bar, .buttons i'
);

const playPause = function () {
	if (video.paused) {
		video.play();
		btn.className = 'far fa-pause-circle';
		video.style.opacity = 0.7;
	} else {
		video.pause();
		btn.className = 'far fa-play-circle';
		video.style.opacity = 0.3;
	}
};

btn.addEventListener('click', function () {
	playPause();
});

video.addEventListener('timeupdate', function (ev) {
	const barWidth = video.currentTime / video.duration;
	console.log(barWidth * 100);
	bar.style.width = `${barWidth * 100}%`;
	if (video.ended) {
		btn.className = 'fas fa-redo';
		video.style.opacity = 0.3;
	}
});

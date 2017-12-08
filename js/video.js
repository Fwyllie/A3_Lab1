var video = {
	videoPlayer : document.querySelector('video'),
	vidThumbs : document.querySelectorAll('.vid-thumb'),
	volumeIndicator : document.querySelector('.vol-indicator'),

	volOn(){
		video.videoPlayer.muted =  false;
		video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up');
	},

	volOff(){
		video.videoPlayer.muted =  true;
		video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off');
	},

	popOverLay(){
		let overlay =  document.querySelector('.vid-overlay');
		overlay.classList.add('show-overlay');

		overlay.querySelector('i').addEventListener("click", video.replayVideo);
	},

	replayVideo(){
		//rewind
		video.videoPlayer.currentTime = 0;
		video.videoPlayer.play();

		//debugger;
		let overlay =  document.querySelector('.vid-overlay');
		overlay.classList.remove('show-overlay');

		overlay.querySelector('i').removeEventListener("click", video.replayVideo);
	},

	init(){
		console.log('video module added');
		//add event handling
		video.videoPlayer.addEventListener('mouseover', video.volOn);
		video.videoPlayer.addEventListener('mouseout', video.volOff);
		video.videoPlayer.addEventListener('ended', video.popOverLay);
	}
}

video.init();
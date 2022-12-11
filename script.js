const container = document.getElementById('container');

function addAudioBox(name, audioSrc) {

	// Create the box and add style
	const box = document.createElement('div');
	box.classList.add("box");

	const targetAudio = document.createElement('audio');
	targetAudio.src = audioSrc;
	box.appendChild(targetAudio);

	// Add click handler
	box.addEventListener('click', () => {

		targetAudio.currentTime = 0;
		targetAudio.play();

		box.addEventListener('transitionend', function() {
			box.classList.remove('pressed');
		});
	});

	// Text inside the box
	const p = document.createElement('p');
	p.innerText = name;
	box.appendChild(p);

	const audio = document.createElement('audio');
	audio.src = audioSrc;

	return box;
}

function stopAudioBtn() {
	// Get all audio sources
	const audios = document.querySelectorAll('audio');

	// Create Stop button
	const stopBtn = document.createElement('button');
	stopBtn.textContent = "STOP";

	stopBtn.addEventListener('click', () => {
		audios.forEach((audio) => {
			audio.pause();
			audio.currentTime = 0;
		})
	});

	return stopBtn;
}

container.appendChild(addAudioBox("MonsterBlock", './audio/monster-block-By-Tuna.mp3'));
container.appendChild(addAudioBox('Here Comes The boomer', './audio/here-comes-the-boom!-By-Tuna.mp3'));
document.body.appendChild(stopAudioBtn());

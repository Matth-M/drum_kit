const keys = [
    'q',
    's',
    'd',
    'f',
]

const container = document.getElementById('container');


for (const key in keys) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.classList.add(`${keys[key]}`)
    container.appendChild(box);

    const p = document.createElement('p');
    p.innerText = keys[key];
    box.appendChild(p);

}

document.addEventListener("keydown", function(e){
	// We select the box corresponding to the key pressed
	const targetBox = document.querySelector('.'+`${e.key}`);
	targetBox.classList.add('pressed');

	// Launch the audio
	const targetAudio = document.querySelector(`audio.${e.key}`);
	targetAudio.currentTime = 0;
	targetAudio.play();

	targetBox.addEventListener('transitionend',function(){
		targetBox.classList.remove('pressed');
	});
});

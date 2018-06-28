// MARK: p5.js

const emojiUnicode = [ '😂', '😘', '😱', '🤤', '👻', '😈', '💩', '👁', '😵', '👨🏾‍💻' ];
let selectedEmoji = 0;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	const gameDiv = document.getElementById('game');
	const emojiBoardDiv = document.createElement('div');

	emojiUnicode.forEach((emoji, i) => {
		const emojiDiv = document.createElement('div');
		emojiDiv.id = `emoji${i}`;
		emojiDiv.classList.add('emoji');
		emojiDiv.textContent = emoji;

		emojiDiv.addEventListener('click', () => {
			selectedEmoji = Number(emojiDiv.id.split('emoji')[1]);
		});

		emojiBoardDiv.appendChild(emojiDiv);
	});

	gameDiv.appendChild(emojiBoardDiv);
}

function draw() {
	if (mouseIsPressed) {
		textSize(48);
		text(emojiUnicode[selectedEmoji], mouseX, mouseY);
	} else {
		fill(255);
		background(255);
	}
}
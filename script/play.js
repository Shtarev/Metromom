// Start-up
function playClick() {
    document.getElementById('play').style.display = "none";
    document.getElementById('pause').style.display = "block";
	document.getElementById('pendel').style.transition = frequenz/2+"ms"; // темп движения маятника
	intervalID = setInterval(audioPlay, frequenz);
}

// Pause
function pauseClick() {
	clearInterval(intervalID);
	document.getElementById('pendel').style.transform = "rotate(90deg)";
    document.getElementById('play').style.display = "block";
    document.getElementById('pause').style.display = "none";
}

function audioPlay() {
	var audio = new Audio('klang/click.mp3');
	// Loudness
    var lautheit = document.getElementById('lautheit').value;
    audio.volume = lautheit;
    audio.play();
	// We add css a class of movement of a pendulum
	if (i == 0) {
		document.getElementById('pendel').style.transform = "rotate(120deg)"; // в лево
		i = 1;
	}
	else {
		document.getElementById('pendel').style.transform = "rotate(60deg)"; // в право
		i = 0;
	} 
}
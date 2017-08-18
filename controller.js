createjs.Sound.registerSound("./audio.mp3", "x");
var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {  
	setTimeout(function () {
		createjs.Sound.play("x");
	}, 100);
}
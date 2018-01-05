	//global variables

	let timer = document.getElementById('timer');
	let startButton = document.getElementById('startstop');
	let resetButton = document.getElementById('reset');
	let recordButton = document.getElementById('record');
	let pastTimes = document.getElementById('pasttimes');
	let timeValue = 0; 
	let interval;


//start the timer
  function startTimer(){
  	interval = setInterval(function(){
  		timeValue++;
  		timer.textContent = timeValue/100;
  	},10);
  }

//stop the timer
function stopTimer(){
	clearInterval(interval);
	interval = null;
}

//create condition so the eventListener is not messy.
function startStop(){
	!interval ? startTimer() : stopTimer()
}

//record the time
function recordTime(){
	let time = document.createElement('p');
	time.innerHTML = timeValue/100;
	pastTimes.appendChild(time);
}

//reset
function reset(){
	stopTimer();
	timeValue = 0;
	timer.textContent = '';
	pastTimes.innerHTML = '';
}

//keypress function
//hit s to activate the startButton click event
//hit t to activate the recordButton click event
//hit r to activate the resetButton click event
function hitKey(e){
	switch(e.key){
		case 's':
			startButton.click();
			break;
		case 'r':
			resetButton.click();
			break;
		case 't':
			recordButton.click();
			break;		
	}
}

//event handlers
startButton.addEventListener('click', startStop);
recordButton.addEventListener('click', recordTime);
resetButton.addEventListener('click', reset);
window.addEventListener('keydown', hitKey);


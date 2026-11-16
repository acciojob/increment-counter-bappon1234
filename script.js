//your JS code here. If required.
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');

let count = 0;

incrementBtn.addEventListener('click', function(){
	let currentValue = parseInt(counter.textContent);
	alert(currentValue);
	counter.textContent = currentValue + 1;
});
// Function to get and show the result about score average
function showAverage() {
	var a1 = parseFloat(document.getElementById("a1").value);
	var a2 = parseFloat(document.getElementById("a2").value);
	var a3 = parseFloat(document.getElementById("a3").value);
	var a4 = parseFloat(document.getElementById("a4").value);

	var soma = a1 + a2 + a3 + a4;
	var media = soma / 4;

	//Condition to verify whether average is NaN before getting a value
	if (Number.isNaN(media)) {
		media = 0;
	}

	//Value return
	if (media < 4) {
		document.getElementById(
			"resultAverage"
		).innerText = `Your score average is: ${parseFloat(media).toFixed(
			2
		)} \nAnd you're disapproved. It's a shame!`;
	} else if ((media > 4) & (media < 6)) {
		document.getElementById(
			"resultAverage"
		).innerText = `Your score average is: ${parseFloat(media).toFixed(
			2
		)} \nAnd you're not passed but you have a chance with the retest. Good luck!`;
	} else if ((media >= 6) & (media <= 10)) {
		document.getElementById(
			"resultAverage"
		).innerText = `Your score average is: ${parseFloat(media).toFixed(
			2
		)} \nAnd you're approved. Congratulations!`;
	} else {
		document.getElementById("resultAverage").innerText =
			"Please write only the numbers from 0 to 10 using the dot '5.45' for broken score averages";
	}
}

// Function to check empty inputs doing a loop in each input
function checkInputs(inputs) {
	var filled = true;
	inputs.forEach(function (input) {
		if (input.value === "") {
			filled = false;
		}
	});
	return filled;
}

// event fired for each keyup typed, calling the function checkInputs and validating if there are still empty fields
var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function (input) {
	input.addEventListener("keyup", function () {
		if (checkInputs(inputs)) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	});
});

// Function to reset 'resultAverage' label value
function reset() {
	document.getElementsById("resultAverage").innerText = "";
}

// Below have variables, events and function to limit the max number on input
// Variable for average max defined here
let averageMax = 10;
let averageMin = 0;

// Variables receiving ids of inputs
var average1 = document.getElementById("a1");
var average2 = document.getElementById("a2");
var average3 = document.getElementById("a3");
var average4 = document.getElementById("a4");

// Variable receiving the function that define the max number to keyup and blur
var maxValue = maxNumber(averageMax);
var minValue = minNumber(averageMin);

// Variables getting events to keyup/blur and atribuindo the maxValue to id of inputs
average1.addEventListener("keyup", maxValue);
average1.addEventListener("blur", maxValue);
average2.addEventListener("keyup", maxValue);
average2.addEventListener("blur", maxValue);
average3.addEventListener("keyup", maxValue);
average3.addEventListener("blur", maxValue);
average4.addEventListener("keyup", maxValue);
average4.addEventListener("blur", maxValue);

average1.addEventListener("keyup", minValue);
average1.addEventListener("blur", minValue);
average2.addEventListener("keyup", minValue);
average2.addEventListener("blur", minValue);
average3.addEventListener("keyup", minValue);
average3.addEventListener("blur", minValue);
average4.addEventListener("keyup", minValue);
average4.addEventListener("blur", minValue);

// Function limiting maxValue for number(average scores) on inputs after run the events above
function maxNumber(max) {
	var running = false;
	return function () {
		//For avoid conflict between blur and keyup
		if (running) return;
		//For blocking multiple calls about blur and keyup
		running = true;
		//For fixing default value if value into input will be bigger that maxValue(in this code the max is 10)
		if (parseFloat(this.value) > max) {
			this.value = averageMax;
		}
		//Re-enables blur and keyup calls
		running = false;
	};
}

// Function limiting maxValue for number(average scores) on inputs after run the events above
function minNumber(min) {
	var running = false;
	return function () {
		//For avoid conflict between blur and keyup
		if (running) return;
		//For blocking multiple calls about blur and keyup
		running = true;
		//For fixing default value if value into input will be bigger that maxValue(in this code the max is 10)
		if (parseFloat(this.value) < min) {
			this.value = averageMin;
		}
		//Re-enables blur and keyup calls
		running = false;
	};
}

// alterando tema da label averageResult
const btnDiscover = document.querySelector(".js-theme");
// garantindo que ao clicar no botão ele não vá recarregar a pagina do formulario
if (btnDiscover) {
	btnDiscover.addEventListener("click", (event) => {
		event.preventDefault();
		console.log("teste btn js-theme");
	});
}

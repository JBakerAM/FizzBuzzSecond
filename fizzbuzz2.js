$(document).ready(function() {
	var input1 = parseInt(prompt("Pick two whole numbers between 1 and 100, starting with the first number"));
	var input2 = parseInt(prompt("And now for the second number"));
	for (var i=1; i <=100; i++) {
		if (i % input1 === 0 && i % input2 === 0) {
			$("p").append("FizzBuzz ");
		}
		else if (i % input1 === 0) {
			$("p").append("Fizz ");
		}
		else if (i % input2 === 0) {
			$("p").append("Buzz ");
		}
		else {
			$("p").append(i + " ");
		}
	}
});
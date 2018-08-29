'use strict';

// 1 task

var hello = 'Hello';
var world = 'World';

var text = hello + ' ' + world;

console.log(text);

// task 2 

var multiply = function multiply(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
		return 5 * y;
};

console.log(multiply(5));

//task 3

var average = function average() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
		}

		var number = 0;
		var i = 0;
		args.forEach(function (arg) {
				return number = number + arg, i++;
		});
		console.log('Average value is: ' + number / i);
};

average(1);
average(1, 3);
average(1, 3, 6, 6);

//task 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

//task 5

var array = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = array[2],
    lastName = array[4];


console.log(firstName, lastName);

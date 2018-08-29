// 1 task

const hello = `Hello`;
const world = `World`;

const text = `${hello} ${world}`

console.log(text);

// task 2 

const multiply = (x,y=1) => 5 * y

console.log (multiply(5));

//task 3

const average = (...args) => {
		let number = 0;
		let i = 0;
		args.forEach( arg => (number = number + arg, i++))
		console.log('Average value is: '+number/i)
	};

average(1)
average(1,3)
average(1,3,6,6)

//task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades)

//task 5

const array = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , lastName] = array;

console.log(firstName,lastName)
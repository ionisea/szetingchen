// Write your code here. To run a function on a given test file you need to
// create a file in your github repo in the advent-of-code branch and in the
// advent-of-code directory. Then you can use a function `run` to run a
// particular function on the contents of the file, which will be passed to your
// function as a string.
//
// For example, if I've created a file 'day_01.test' to contain the test data
// from day 1, and a function, day01Part1, I can run the function with this
// call:
//
//   run('day_01.test', day01Part1)
//
// Which will load the file and pass them to your function and then print the
// return value in the REPL.

const extract = (s) => s.split('\n')
const day01Part1 = (s) => {
  let currentSum = 0
  let max = 0
}

console.log(run ('day01.sample', extract))

/* (done in jsfiddle)
let max1 = 0
let max2 = 0
let max3 = 0
for (let i in input) {
	let sum = 0
	input[i] = input[i].split('\n').map(Number)
  for (let j = 0; j < input[i].length; j++) {
  sum += input[i][j]
	}
  if (sum > max1) {
  max3 = max2
  max2 = max1
  max1 = sum
  } else if (sum > max2) {
  max2 = max3
  max2 = sum
  } else if (sum > max3) {
  max3 = sum
  }
}

console.log(max1 + max2 + max3)
*/
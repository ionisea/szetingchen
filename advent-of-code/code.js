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

const day01Extract = (s) => s.split('\n\n')
const day01Part1 = (s) => {
  let input = day01Extract(s)
  let max = 0
  for (let i in input) {
    let sum = 0
    input[i] = input[i].split('\n').map(Number)
    for (let j = 0; j < input[i].length; j++) {
      sum += input[i][j]
    }
    if (sum > max) {
      max = sum
    }
  }
  return max
}

const day01Part2 = (s) => {
  let input = day01Extract(s)
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
      max3 = max2
      max2 = sum
    } else if (sum > max3) {
      max3 = sum
    }
  }
  return max1 + max2 + max3
}

//========================================================

const day02Extract = (s) => s.split('\n').map(i => i.split(' '))
const day02Part1 = (s) => {
  let input = day02Extract(s)
  let points = 0
  for (let i in input) {
    if (input[i][0] === "A" && input[i][1] === "X") {
      points += (1 + 3)
    } else if (input[i][0] === "A" && input[i][1] === "Y") {
      points += (2 + 6)
    } else if (input[i][0] === "A" && input[i][1] === "Z") {
      points += (3 + 0)
    } else if (input[i][0] === "B" && input[i][1] === "X") {
      points += (1 + 0)
    } else if (input[i][0] === "B" && input[i][1] === "Y") {
      points += (2 + 3)
    } else if (input[i][0] === "B" && input[i][1] === "Z") {
      points += (3 + 6)
    } else if (input[i][0] === "C" && input[i][1] === "X") {
      points += (1 + 6)
    } else if (input[i][0] === "C" && input[i][1] === "Y") {
      points += (2 + 0)
    } else if (input[i][0] === "C" && input[i][1] === "Z") {
      points += (3 + 3)
    }
  }
  return points
}

const day02Part2 = (s) => {
  let input = day02Extract(s)
  let points = 0
  for (let i in input) {
    if (input[i][0] === "A" && input[i][1] === "X") {
      points += (3 + 0)
    } else if (input[i][0] === "A" && input[i][1] === "Y") {
      points += (1 + 3)
    } else if (input[i][0] === "A" && input[i][1] === "Z") {
      points += (2 + 6)
    } else if (input[i][0] === "B" && input[i][1] === "X") {
      points += (1 + 0)
    } else if (input[i][0] === "B" && input[i][1] === "Y") {
      points += (2 + 3)
    } else if (input[i][0] === "B" && input[i][1] === "Z") {
      points += (3 + 6)
    } else if (input[i][0] === "C" && input[i][1] === "X") {
      points += (2 + 0)
    } else if (input[i][0] === "C" && input[i][1] === "Y") {
      points += (3 + 3)
    } else if (input[i][0] === "C" && input[i][1] === "Z") {
      points += (1 + 6)
    }
  }
  return points
}

//=====================================================

const day03Extract = (s) => s.split('\n')
const day03Part1 = (s) => {
  let input = day03Extract(s)
  const compartment1 = []
  const compartment2 = []
  for (let i in input) {
    compartment1.push(input[i].substring(0, input[i].length / 2))
    compartment2.push(input[i].length / 2)
  }
  for (let x = 0; x < compartment1.length; x++) {
    //find if any letter matches (case sensitive)
  }
}

run('day01.input', day01Part1, 69177)
run('day01.input', day01Part2, 207456)
run('day02.input', day02Part1, 8890)
run('day02.input', day02Part2, 10238)

/* Day 2 Part 1: (Done in jsFiddle)
let points = 0
for (let i in input) {
  if (input[i][0] === "A" && input[i][1] === "X") {
    points += (1 + 3)
  } else if (input[i][0] === "A" && input[i][1] === "Y") {
    points += (2 + 6)
  } else if (input[i][0] === "A" && input[i][1] === "Z") {
    points += (3 + 0)
  } else if (input[i][0] === "B" && input[i][1] === "X") {
    points += (1 + 0)
  } else if (input[i][0] === "B" && input[i][1] === "Y") {
    points += (2 + 3)
  } else if (input[i][0] === "B" && input[i][1] === "Z") {
    points += (3 + 6)
  } else if (input[i][0] === "C" && input[i][1] === "X") {
    points += (1 + 6)
  } else if (input[i][0] === "C" && input[i][1] === "Y") {
    points += (2 + 0)
  } else if (input[i][0] === "C" && input[i][1] === "Z") {
    points += (3 + 3)
  }
}
console.log(points)

Day 2 Part 2: (done in jsFiddle)
let points = 0
for (let i in input) {
  if (input[i][0] === "A" && input[i][1] === "X") {
    points += (3 + 0)
  } else if (input[i][0] === "A" && input[i][1] === "Y") {
    points += (1 + 3)
  } else if (input[i][0] === "A" && input[i][1] === "Z") {
    points += (2 + 6)
  } else if (input[i][0] === "B" && input[i][1] === "X") {
    points += (1 + 0)
  } else if (input[i][0] === "B" && input[i][1] === "Y") {
    points += (2 + 3)
  } else if (input[i][0] === "B" && input[i][1] === "Z") {
    points += (3 + 6)
  } else if (input[i][0] === "C" && input[i][1] === "X") {
    points += (2 + 0)
  } else if (input[i][0] === "C" && input[i][1] === "Y") {
    points += (3 + 3)
  } else if (input[i][0] === "C" && input[i][1] === "Z") {
    points += (1 + 6)
  }
}
console.log(points)
*/
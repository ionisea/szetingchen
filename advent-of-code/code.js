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

const day03Extract = (s) => s.trimEnd().split('\n')
const commonItem = (s) => {
  const halfway = s.length / 2
  const [firstHalf, secondHalf] = [
    s.substring(0, halfway), s.substring(halfway)
  ]
  const includes = [...secondHalf].filter((x) => firstHalf.includes(x))
  return includes[0]
}
const day03Part1 = (s) => {
  let input = day03Extract(s)
  const items = []
  for (let i = 0; i < input.length; i++) {
    items.push(commonItem(input[i]))
  }
  for (let i = 0; i < items.length; i++) {
    if ('abcdefghijklmnopqrstuvwxyz'.indexOf(items[i]) !== -1) {
      items[i] = 'abcdefghijklmnopqrstuvwxyz'.indexOf(items[i]) + 1
    } else {
      items[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(items[i]) + 27
    }
  }
  return items.reduce((acc, x) => acc + x, 0)
}

const day03Part2 = (s) => {
  let input = day03Extract(s)
  let results = []
  input.forEach((x, index) => {
    if (index%3 !== 0) {
      results.push(x)
    } else {
      results.push('')
      results.push(x)
    }
  })
  results.shift
  console.log(results)
}

run('day01.input', day01Part1, 69177)
run('day01.input', day01Part2, 207456)
run('day02.input', day02Part1, 8890)
run('day02.input', day02Part2, 10238)
run('day03.input', day03Part1, 8088)
run('day03.sample', day03Part2)
const timesTable = (rows, columns) => {
  const numbers = Array(columns).fill().map((_, i) => i + 1)
  for (let i = 1; i <= rows; i++) {
    const print = numbers.map(x => x * i)
    console.log(print)
  }
}
timesTable(10, 9)

const exponents = (exponent, rows, columns)

const countTens = (array) => {
  let num = 0
  for (const element of array) {
    element == 10 ? num += 1 : num
  }
  return num
}

const sum = (array) => {
  let add = 0
  for (const element of array) {
    add += element
  }
  return add
}

const evens = (array) => {
  const evenArray = []
  for (const element of array) {
    element % 2 == 0? evenArray.push(element) : evenArray
  }
  return evenArray
}

const anyOverOneHundred = (array) => {
  return array.find (element => element > 100) ? true : false
}

const pyramid = (num) => {
  const array = []
  for (let x = 1; x <= num; x++) {
    for (let i = 1; i <= x; i++) {
      array.push(x)
    }
  }
  return array
}
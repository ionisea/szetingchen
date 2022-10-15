const timesTable = (rows, columns) => {
  const numbers = Array(rows).fill().map((_, i) => i + 1)
  for (let i = 1; i <= columns; i++) {
    const print = numbers.map(x => x * i)
    console.log(print)
  }
}
//timesTable(9, 9)

const countTens = (array) => {
  let num = 0
  for (const element of array) {
    if (element == 10) {
      num++
    }
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
    if (element % 2 == 0) {
      evenArray.push(element)
    }
  }
  return evenArray
}
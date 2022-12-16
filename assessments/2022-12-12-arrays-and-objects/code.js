const makeRow = () => {
  return Array(3).fill('')
}

const makeBoard = () => {
  return Array(3).fill(Array(3).fill(''))
}

const makeMove = (s, row, column) => {
  return ({mark: s, row, column})
}
const makeRow = () => {
  return Array(3).fill('')
}

const makeBoard = () => {
  return Array(3).fill(Array(3).fill(''))
}

const makeMove = (mark, row, column) => {
  return ({mark, row, column})
}

const placeMark = (arr, obj) => {
  arr[obj.row][obj.column] = obj.mark
}

const allTheSame = (arr) => {
  arr[0] === arr[1] === arr[2] ? 
}
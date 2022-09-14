const add = (a,b) => {
  return a+b
}
const subtract = (a,b) => {
  return a-b
}
const multiply = (a,b) => {
  return a*b
}
const divide = (a,b) => {
  return a/b
}
const mod = (a,b) => {
  return a%b
}
const averageOfTwo = (a,b) => {
  return (a+b)/2
}
const averageOfThree = (a,b,c) => {
  return (a+b+c)/3
}
const distance = (a,b) => {
  return Math.abs(a-b)
}
const manhattanDistance = (a,b,c,d) => {
  return Math.abs(a-c)+Math.abs(b-d)
}
const euclideanDistance = (a,b,c,d) => {
  return Math.sqrt(((Math.abs(a-c))**2)+((Math.abs(b-d))**2))
}

//That was fun, I like this kind of thing
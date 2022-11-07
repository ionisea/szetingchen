const getX = (o) => {
  return o.x
}

const point = (n1, n2) => {
  return {"x" : n1, "y" : n2}
}

const emptyObject = () => {
  return {}
}

const distance = (o1, o2) => {
  return Math.sqrt((o1.y - o2.y)**2 + (o1.x - o2.x)**2)
}

const midpoint = (o1, o2) => {
  return {"x" : (o1.x + o2.x)/2, "y" : (o1.y + o2.y)/2}
}

const sumSalaries = (a) => {
  let sum = 0
  for (const element of a) {
    sum += element.salary
  }
  return sum
}

const newHighScore = (hs, a) => {
  let high = hs
  for (const element of a) {
    if (element.score > high) {
      high = element.score
    }
  }
  return high
}
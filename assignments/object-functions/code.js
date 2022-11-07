const getX = (o) => {
  return o.x
}

const point = (n1, n2) => {
  return { "x": n1, "y": n2 }
}

const emptyObject = () => {
  return {}
}

const distance = (o1, o2) => {
  return Math.sqrt((o1.y - o2.y) ** 2 + (o1.x - o2.x) ** 2)
}

const midpoint = (o1, o2) => {
  return { "x": (o1.x + o2.x) / 2, "y": (o1.y + o2.y) / 2 }
}

const sumSalaries = (a) => a.reduce((acc, x) => acc + x.salary, 0)

const newHighScore = (hs, ps) => ps.reduce((acc, p) => Math.max(p.score, acc), hs)

/*
const summarizeBooks = (a) => {
  let pageTotal = 0
  const titleList = []
  for (const element of a) {
    titleList.push(element.title)
    pageTotal += element.pages
  }
  return { "titles": titleList, "pages": pageTotal }
}
*/

const summarizeBooks = (a) => {
  return {"titles" : Array(a.length).fill()}
}
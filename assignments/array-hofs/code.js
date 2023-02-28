const evens = (arr) => {
  return arr.filter(x => x % 2 === 0);
};

const odds = (arr) => {
  return arr.filter(x => x % 2 !== 0);
};

const big = (arr) => {
  return arr.filter(x => x > 100);
};

const names = (arr) => {
  return arr.map(x => x.name);
};

const grades = (arr) => {
  return arr.map(x => x.grade);
};

const pairs = (arr) => {
  return arr.map(x => [x, x]);
};

const averageGrade = (arr) => {
  return arr.reduce((acc, x) => acc + x.grade, 0) / arr.length
}

const flatpairs = (arr) => {
  return arr.flatMap(x => [x, x]);
};

const 
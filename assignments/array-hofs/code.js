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
  return arr.map(x => x.names);
};
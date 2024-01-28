const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = number.reduce((cumm, curvalue) => {
  return cumm + curvalue;
}, 0);

console.log(total);

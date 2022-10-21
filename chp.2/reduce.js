const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue, initialValue
)

console.log(sumWithInitial);

const sum = [{ x: 1}, {x: 2}, {x: 3}].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x, initialValue
);

console.log(sum);

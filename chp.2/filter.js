const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

const fruits = ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange'];

//검색 조건에 따른 배열 필터링
const filterItems = (query) => fruits.filter(
  (el) => el.toLowerCase().includes(query.toLowerCase())
);

console.log(filterItems('ap'));
console.log(filterItems('an'));

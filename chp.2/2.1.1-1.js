if (true) {
  var x = 3;
}
console.log(x);     //3
console.log(y);     //undefined (오류발생)

if (true) {
  const y = 3;
}
//console.log(y);   //오류 발생

if (true) {
  let z = 3;
}
console.log(z);     //오류 발생

// y,z : 구문 안에서만 사용 가능(if, for 등등)

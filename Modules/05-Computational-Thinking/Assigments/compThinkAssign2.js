function perimeter(letter, num) {
  return letter === "s" ? num * 4 : +(2 * (Math.PI * num)).toFixed(2);
}

console.log(perimeter("s", 7)); // 28

console.log(perimeter("c", 4)); // 25.12

console.log(perimeter("c", 9)); //56.52

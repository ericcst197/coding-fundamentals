function possibleBonus(a, b) {
  return a < b && b - a < 6;
}

console.log(possibleBonus(3, 7)); // true

console.log(possibleBonus(1, 9)); //false

console.log(possibleBonus(5, 3)); //false

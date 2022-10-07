function generation(x, y) {
  if (x === 0) return "me!";
  const generationObj = {
    1: "",
    2: "grand",
    3: "great grand",
  };
  let name;
  if (x < 0 && y === "f") {
    name = generationObj[Math.abs(x)] + "mother";
  } else if (x < 0 && y === "m") {
    name = generationObj[Math.abs(x)] + "father";
  } else if (x > 0 && y === "f") {
    name = generationObj[Math.abs(x)] + "daugther";
  } else {
    name = generationObj[Math.abs(x)] + "son";
  }
  return name;
}

console.log(generation(2, "f")); // "granddaughter"
console.log(generation(-3, "m")); // "great grandfather"
console.log(generation(1, "f")); // "daughter"
console.log(generation(0, "f")); // "me!"

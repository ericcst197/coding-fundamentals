function getDays(dateA, dateB) {
  const diff = dateA.getTime() - dateB.getTime();
  return Math.abs(Math.floor(diff / 1000 / 60 / 60 / 24));
  //Math.floor to avoid floating number
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))); // 6

console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
); // 3
// Dates may not all be in the same month/year.

console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019"))); // 10

console.log(
  getDays(new Date("December 20, 2019"), new Date("December 20, 2039"))
);

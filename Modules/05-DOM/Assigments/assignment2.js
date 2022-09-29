const palette = document.querySelector(".palette");
const container = document.querySelector(".container");

// store the first pressed key in the object to check with multiple key pressing
let keysPressed = {};

palette.style.display = "none";

document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;

  // change to key M , to prevent default ctrl + k in google search
  if (keysPressed["Control"] && event.key == "m") {
    palette.style.display = "block";
    palette.classList.add("fade-in");
  }
});

// the command palatte will disappear if pressing outside the commend palatte
document.addEventListener("click", function (e) {
  let parent = e.target.closest(".palette");
  if (parent !== palette) {
    palette.classList.remove("fade-in");
    palette.style.display = "none";
  }
});

document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});

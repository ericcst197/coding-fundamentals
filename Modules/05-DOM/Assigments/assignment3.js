const btnRegister = document.querySelector(".register-button");
const btnClose = document.querySelector(".close-button");
const slideOverContainer = document.querySelector(".slide-over-container");
const backdrop = document.querySelector(".bg-backdrop");

btnClose.addEventListener("click", function () {
  slideOverContainer.classList.add("slide-out");
  slideOverContainer.classList.remove("slide-in");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 70);
});

btnRegister.addEventListener("click", function () {
  slideOverContainer.classList.add("slide-in");
  slideOverContainer.classList.remove("slide-out");
  setTimeout(function () {
    backdrop.style.display = "block";
  }, 70);
});

backdrop.addEventListener("click", function () {
  slideOverContainer.classList.add("slide-out");
  slideOverContainer.classList.remove("slide-in");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 70);
});

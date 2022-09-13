const API_URL = "https://api.github.com/users";
const form = document.querySelector(".form");

const inputName = document.querySelector("#user");
const username = document.querySelector("#name");
const joinedDate = document.querySelector("#date");
const biography = document.querySelector(".bio");
const avatar = document.querySelector(".avatar");

async function getUser(username) {
  const data = await fetch(`${API_URL}/${username}`);
  const response = await data.json();

  return response;
}

// parameter from inputName & pass into the function getUser
async function displayUser(user) {
  const { name, bio, avatar_url: img, created_at } = await getUser(user);
  console.log(created_at);
  const date = new Date(created_at).getDate();
  const monthIndex = new Date(created_at).getMonth();
  const year = new Date(created_at).getFullYear();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  avatar.style.backgroundImage = `url(${img})`;
  username.innerHTML = name;
  biography.innerHTML = bio || "null";
  joinedDate.innerHTML = `Joined at: ${date} ${month[monthIndex]} ${year}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = inputName.value;
  displayUser(value);
});

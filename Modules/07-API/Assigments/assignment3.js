const button = document.querySelector("button");
const resultDiv = document.querySelector(".result");
const gistId = "cc322929dde696e43cbadd039d98466d";

const API_URL = "https://api.github.com/gists";

async function getGist() {
  const data = await fetch(`${API_URL}/${gistId}`);
  const response = await data.json();
  const content = response.files.me.content;
  return content;
}

async function displayGist() {
  const data = await getGist();
  const obj = JSON.parse(data);

  const name = document.createElement("h2");
  name.innerHTML = `Name: ${obj.name}`;
  const age = document.createElement("p");
  age.innerHTML = `Age: ${obj.age}`;
  let list = document.createElement("ul");

  for (const hobby of obj.hobbies) {
    const item = document.createElement("li");
    item.innerHTML = hobby;
    list.append(item);
  }

  resultDiv.append(name, age, list);
}

button.addEventListener("click", displayGist);

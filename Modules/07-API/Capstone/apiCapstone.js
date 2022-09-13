const API_URL = "https://api.thecatapi.com/v1/breeds";
const mainDiv = document.querySelector(".main");

async function getData() {
  const data = await fetch(API_URL);
  const response = await data.json();

  return response;
}

async function renderData() {
  const datas = await getData();
  const datasWithImgURL = datas.filter((data) => data.image);
  let html = ``;
  for (const { name, description, image } of datasWithImgURL) {
    html += `
    <div class="card">
        <div class="card__img">
            <img src="${image.url}" alt="">
        </div>
        <div class="card__content">
            <h5 class="card__title">${name}</h5>
            <p class="card__subtitle">${description}</p>
        </div>
        <button>Profile</button>
    </div>
    `;
  }
  mainDiv.insertAdjacentHTML("afterbegin", html);
}

renderData();

const button = document.querySelector("#button");
const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");

const API_URL = "https://api.quotable.io/random";

async function getQuote() {
  const data = await fetch(API_URL);
  const response = await data.json();

  return response;
}

async function showQuote() {
  const { content, author } = await getQuote();
  quote.innerHTML = content;
  quoteAuthor.innerHTML = author;
}

button.addEventListener("click", showQuote);

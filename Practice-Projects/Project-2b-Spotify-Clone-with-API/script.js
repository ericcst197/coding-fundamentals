let TOKEN = "";
let client_id = "89701c7567ac4269b60dcfc2ebf9d901"; // Your client ID
let redirect_uri = window.location.origin; //The current page URL
let scope = "user-read-private user-read-email user-read-recently-played"; // A space separated scopes

function authorize() {
  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  window.open(url, "_self");
}

function extractTokenFromURI() {
  let hash = window.location.hash;
  if (hash && hash.includes("access_token")) {
    let url = hash.replace("#access_token=", "");
    let chunks = url.split("&");
    // step 3 store the token in the variable above
    let token = chunks[0];
    return token;
  }
  return null; // return null if there's no token
}

// step 4 start fetching the user's recently played using the token.
async function fetchUserRecentlyPlayed() {
  try {
    let endpoint = "https:api.spotify.com/v1/me/player/recently-played";
    let response = await fetch(endpoint + "?limit=6", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    let data = await response.json();
    displayUserRecentlyPlayed(data);
    // console.log("Recently Played", data.items);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}

// step 5 - display the user's recently played
function displayUserRecentlyPlayed(data) {
  let section = document.querySelector("#recently-played");
  let sectionTitle = section.querySelector(".title");
  let sectionSubtitle = section.querySelector(".subtitle");
  let sectionWrapper = section.querySelector(".card-wrapper");
  sectionTitle.textContent = "Recently played";
  sectionSubtitle.textContent = "Based on your recent listening";
  for (let i = 0; i < data.items.length; i++) {
    let track = data.items[i].track;

    let image = track.album.images[1].url;
    let title = track.name;
    let subtitle = track.album.artists[0].name;
    let href = track.album.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
  }
}

// step 6 - start fetching the new releases using the token.
async function fetchNewReleases() {
  try {
    let endpoint = "https://api.spotify.com/v1/browse/new-releases";
    let response = await fetch(endpoint + "?limit=6", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    let data = await response.json();
    displayNewReleases(data);
    // console.log("New Releases", data);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}

// step 7 - display new releases
function displayNewReleases(data) {
  let section = document.querySelector("#new-releases");
  let sectionTitle = section.querySelector(".title");
  let sectionSubtitle = section.querySelector(".subtitle");
  let sectionWrapper = section.querySelector(".card-wrapper");
  sectionTitle.textContent = "New Releases";
  sectionSubtitle.textContent = "New releases from Spotify";
  for (let i = 0; i < data.albums.items.length; i++) {
    let track = data.albums.items[i];
    // console.log(track);
    let image = track.images[1].url;
    let title = track.name;
    let subtitle = track.artists[0].name;
    let href = track.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
  }
}

// step 8 start fetching featured playlists using the token
async function fetchFeaturedPlaylists() {
  try {
    let endpoint = "https://api.spotify.com/v1/browse/featured-playlists";
    let response = await fetch(endpoint + "?limit=6", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    let data = await response.json();
    displayFeaturedPlaylists(data);
    // console.log("Featured Playlists", data);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}
//step 9 display featured playlists
function displayFeaturedPlaylists(data) {
  let section = document.querySelector("#featured-playlists");
  let sectionTitle = section.querySelector(".title");
  let sectionSubtitle = section.querySelector(".subtitle");
  let sectionWrapper = section.querySelector(".card-wrapper");
  sectionTitle.textContent = "Featured Playlists";
  sectionSubtitle.textContent = "Featured playlists from Spotify";
  for (let i = 0; i < data.playlists.items.length; i++) {
    let track = data.playlists.items[i];

    let image = track.images[0].url;
    let title = track.name;
    let subtitle = track.description;
    let href = track.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
  }
}

//create new reusable function for each of the card display
function generateCard(image, title, subtitle, href) {
  return `
    <a class="card" href="${href}" target="_blank">
        <img src="${image}" alt="Card-image" srcset="" />
        <span class="mdi mdi-play mdi-36px"></span>
        <div class="title">${title}</div>
        <div class="subtitle">${subtitle}</div>
    </a>
    `;
}

// step 1 - wait for the page to be fully loaded
window.addEventListener("load", function () {
  // step 2 - authorize & get the token.
  TOKEN = extractTokenFromURI();
  if (TOKEN) {
    // console.log("TOKEN", TOKEN);
    fetchUserRecentlyPlayed();
    fetchNewReleases();
    fetchFeaturedPlaylists();
  } else {
    authorize();
  }
});

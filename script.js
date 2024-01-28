const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  console.log(searchTerm);
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  console.log(result);

  result.forEach((artist) => {
    artistName.innerText = artist.name;
    artistImage.src = artist.urlImg;
  });

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", (event) => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtist.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});

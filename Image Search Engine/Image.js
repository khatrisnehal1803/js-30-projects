const apiKey = "49755423-a397191be9800cfe80c7a37d3";
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const imageContainer = document.getElementById("imageContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let currentPage = 1;
let currentQuery = "";

async function fetchImages(query, page = 1) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=12&page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.hits;
}

function displayImages(images) {
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.alt = image.tags;
    imageContainer.appendChild(img);
  });
}

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;
  currentQuery = query;
  currentPage = 1;
  imageContainer.innerHTML = "";
  const images = await fetchImages(query, currentPage);
  displayImages(images);
  loadMoreBtn.classList.remove("hidden");
});

loadMoreBtn.addEventListener("click", async () => {
  currentPage++;
  const images = await fetchImages(currentQuery, currentPage);
  displayImages(images);
});

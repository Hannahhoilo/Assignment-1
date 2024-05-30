const filmsList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/films/`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++

      const nextPageResponse = await fetch(`https://swapi.dev/api/films`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

let i = 1; // Add counter for images outside renderData
const renderData = (films) => {
  films.forEach((film) => {

    // CREATING ELEMENTS
    const li = document.createElement("li");
    const title = document.createElement("span");
    const episodeId = document.createElement("span");
    const openingCrawl = document.createElement("span");
    const director = document.createElement("span");
    const releaseDate = document.createElement("span");
    const imgContainer = document.createElement("div");

    // APPENDING ELEMENTS
    filmsList.append(li);
    li.append(title, episodeId, openingCrawl, director, releaseDate, imgContainer);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    title.classList.add("filmTitle");
    episodeId.classList.add("filmEpisodeId");
    openingCrawl.classList.add("filmOpeningCrawl");
    director.classList.add("filmDirector");
    releaseDate.classList.add("filmReleaseDate")
    imgContainer.classList.add("filmImgContainer");

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    title.textContent = film.title;
    episodeId.textContent = `Episode ${film.episode_id}`;
    openingCrawl.textContent = film.opening_crawl;
    director.textContent = film.director;
    releaseDate.textContent = film.release_date;

    // Create and append an image for each film
    const img = document.createElement("img");
    img.src = `assets/pictures/Films/SW-EP-${i}.jpg`; // Use counter i to reference different images
    img.alt = film.title;
    img.classList.add("filmImg");
    imgContainer.appendChild(img);
  
    i++; // increment counter for next iteration
    if (i > 6) { i = 1; } // reset counter if you have only 2 images
  });
};

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
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/films`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const renderData = (films) => {
  films.forEach((film) => {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const title = document.createElement("span");
    const episodeId = document.createElement("span");
    const openingCrawl = document.createElement("span");
    const director = document.createElement("span");
    const releaseDate = document.createElement("span");
    const pictureContainer = document.createElement("span");
    const picture = document.createElement("img");

    // APPENDING ELEMENTS
    filmsList.append(li);
    li.append(title, episodeId, openingCrawl, director, releaseDate, picture, pictureContainer);
    pictureContainer.append(picture);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    title.classList.add("filmTitle");
    episodeId.classList.add("filmEpisodeId");
    openingCrawl.classList.add("filmOpeningCrawl");
    director.classList.add("filmDirector");
    releaseDate.classList.add("filmReleaseDate")
    pictureContainer.classList.add("filmPictureContainer");
    picture.classList.add("filmPicture");


    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    title.textContent = film.title;
    episodeId.textContent = `Episode ${film.episode_id}`;
    openingCrawl.textContent = film.opening_crawl;
    director.textContent = film.director;
    releaseDate.textContent = film.release_date;
    picture.textContent = film.picture;

    picture.src="../assets/pictures/st-ep-4-cover.jpg"
  });
};

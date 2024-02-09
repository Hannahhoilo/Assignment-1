/*

const planetsList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/planets`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const renderData = (planets) => {
  planets.forEach((planet) => {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const population = document.createElement("span");
    const climate = document.createElement("span");
    const residents = document.createElement("span");
    const films = document.createElement("span");
    const pictureContainer = document.createElement("span");
    const picture = document.createElement("img");

    // APPENDING ELEMENTS
    planetsList.append(li);
    li.append(name, population, climate, residents, picture, pictureContainer);
    pictureContainer.append(picture);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("planetName");
    population.classList.add("planetPopulation");
    climate.classList.add("planetClimate");
    residents.classList.add("planetResidents");
    films.classList.add("planetFilms")
    pictureContainer.classList.add("planetPictureContainer");
    picture.classList.add("planetPicture");


    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = planet.name;
    population.textContent = planet.population;
    climate.textContent = planet.population;
    residents.textContent = planet.residents;
    films.textContent = planet.films;
    picture.textContent = film.picture;

    picture.src="../assets/pictures/st-ep-4-cover.jpg"
  });
};


*/
/*

const planetsList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/planets?page=${page}`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const renderData = (planets) => {
  planets.forEach((planet) => {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const population = document.createElement("span");
    const climate = document.createElement("span");
    const residents = document.createElement("span");
    const films = document.createElement("span");
    const pictureContainer = document.createElement("span");
    const picture = document.createElement("img");

    // APPENDING ELEMENTS
    planetsList.append(li);
    li.append(name, population, climate, residents, picture, pictureContainer);
    pictureContainer.append(picture);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("planetName");
    population.classList.add("planetPopulation");
    climate.classList.add("planetClimate");
    residents.classList.add("planetResidents");
    films.classList.add("planetFilms");
    pictureContainer.classList.add("planetPictureContainer");
    picture.classList.add("planetPicture");

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = planet.name;
    population.textContent = planet.population;
    climate.textContent = planet.climate;
    residents.textContent = planet.residents;
    films.textContent = planet.films;

    // Set a default image source (you can modify this based on your requirements)
    picture.src = "../assets/pictures/default-planet-image.jpg";
  });
};


*/



const planetsList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/planets?page=${page}`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const fetchDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// add counter for images
let i = 1; 
const renderData = async (planets) => {
	for (const planet of planets) {
	  // CREATING ELEMENTS
	  const li = document.createElement("li");
	  const name = document.createElement("span");
	  const population = document.createElement("span");
	  const climate = document.createElement("span");
	  const residents = document.createElement("span");
	  const films = document.createElement("span");
	  const imgContainer = document.createElement("span"); 
  
	  // APPENDING ELEMENTS
	  planetsList.append(li);
	  li.append(name, population, climate, residents, films, imgContainer);
  
	  // ADDING CLASSES TO THE CREATED ELEMENTS
	  li.classList.add("createdLi");
	  name.classList.add("planetName");
	  population.classList.add("planetPopulation");
	  climate.classList.add("planetClimate");
	  residents.classList.add("planetResidents");
	  films.classList.add("planetFilms");
	  imgContainer.classList.add("planetImgContainer");
  
	  // SETTING THE CONTENT OF THE CREATED ELEMENTS
	  name.textContent = planet.name;
	  population.textContent = planet.population;
	  climate.textContent = planet.climate;
  
	  // Fetch and display residents' names without title
	  const residentNames = await Promise.all(planet.residents.map(async (residentUrl) => {
		const residentData = await fetchDetails(residentUrl);
		return residentData.name;
	  }));
	  residents.textContent = `${residentNames.join(", ")}`;
  
	  // Fetch and display film names without title
	  const filmNames = await Promise.all(planet.films.map(async (filmUrl) => {
		const filmData = await fetchDetails(filmUrl);
		return filmData.title;
	  }));
	  films.textContent = `${filmNames.join(", ")}`;

    // Create and append an image for each character
    const img = document.createElement("img");
    img.src = `assets/pictures/Planets/sw-planets-${i}.webp`; // Use counter i to reference different images
    img.alt = planet.name;
    img.classList.add("planetImg");
    imgContainer.appendChild(img);
  
	  i++; // increment counter for next iteration
    if (i > 13) { i = 1; } // reset counter if you have only 2 images
	}
};


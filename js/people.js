/*
const peopleList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/people`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/people`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const renderData = (people) => {
  people.forEach((people) => {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const birthYear = document.createElement("span");
    const species = document.createElement("span");
    const homeworld = document.createElement("span");
    const films = document.createElement("span");
    const pictureContainer = document.createElement("span");
    const picture = document.createElement("img");

    // APPENDING ELEMENTS
    peopleList.append(li);
    li.append(name, birthYear, species, homeworld, films, picture, pictureContainer);
    pictureContainer.append(picture);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("peopleName");
    birthYear.classList.add("peopleBirthYear");
    species.classList.add("peopleSpecies");
    homeworld.classList.add("peopleHomeworld");
    films.classList.add("peopleFilms")
    pictureContainer.classList.add("peoplePictureContainer");
    picture.classList.add("peoplePicture");


    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = people.name;
    birthYear.textContent = people.birth_year;
    species.textContent = people.species;
    homeworld.textContent = people.homeworld;
    films.textContent = people.films;
    picture.textContent = people.picture;

    //picture.src="../assets/pictures/st-ep-4-cover.jpg"
  });
};


*/

/*

const peopleList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/people`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/people?page=${page}`);
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

const renderData = async (people) => {
  for (const person of people) {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const birthYear = document.createElement("span");
    const species = document.createElement("span");
    const homeworld = document.createElement("span");
    const films = document.createElement("span");

    // APPENDING ELEMENTS
    peopleList.append(li);
    li.append(name, birthYear, species, homeworld, films);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("peopleName");
    birthYear.classList.add("peopleBirthYear");
    species.classList.add("peopleSpecies");
    homeworld.classList.add("peopleHomeworld");
    films.classList.add("peopleFilms");

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = `Name: ${person.name}`;
    birthYear.textContent = `Birth Year: ${person.birth_year}`;
    species.textContent = `Species: ${person.species}`;
    
    // Fetch and display homeworld name
    const homeworldData = await fetchDetails(person.homeworld);
    homeworld.textContent = `Homeworld: ${homeworldData.name}`;

    // Fetch and display film names
    const filmNames = await Promise.all(person.films.map(async (filmUrl) => {
      const filmData = await fetchDetails(filmUrl);
      return filmData.title;
    }));
    films.textContent = `Films: ${filmNames.join(", ")}`;
  }
};


*/


/*
const peopleList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/people`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/people?page=${page}`);
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

*/
/*
const renderData = async (people) => {
  for (const person of people) {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const birthYear = document.createElement("span");
    const species = document.createElement("span");
    const homeworld = document.createElement("span");
    const films = document.createElement("span");

    // APPENDING ELEMENTS
    peopleList.append(li);
    li.append(name, birthYear, species, homeworld, films);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("peopleName");
    birthYear.classList.add("peopleBirthYear");
    species.classList.add("peopleSpecies");
    homeworld.classList.add("peopleHomeworld");
    films.classList.add("peopleFilms");

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = person.name;
    birthYear.textContent = person.birth_year;
    species.textContent = person.species;
    
    // Fetch and display homeworld name
    const homeworldData = await fetchDetails(person.homeworld);
    homeworld.textContent = `Homeworld: ${homeworldData.name}`;

    // Fetch and display film names
    const filmNames = await Promise.all(person.films.map(async (filmUrl) => {
      const filmData = await fetchDetails(filmUrl);
      return filmData.title;
    }));
    films.textContent = `Films: ${filmNames.join(", ")}`;
  }
};

*/
/*
const renderData = async (people) => {
	for (const person of people) {
	  // CREATING ELEMENTS
	  const li = document.createElement("li");
	  const name = document.createElement("span");
	  const birthYear = document.createElement("span");
	  const species = document.createElement("span");
	  const homeworld = document.createElement("span");
	  const films = document.createElement("span");
	  const imgContainer = document.createElement("span"); // Container for images
  
	  // APPENDING ELEMENTS
	  peopleList.append(li);
	  li.append(name, birthYear, species, homeworld, films, imgContainer); // Add imgContainer
  
	  // ADDING CLASSES TO THE CREATED ELEMENTS
	  li.classList.add("createdLi");
	  name.classList.add("peopleName");
	  birthYear.classList.add("peopleBirthYear");
	  species.classList.add("peopleSpecies");
	  homeworld.classList.add("peopleHomeworld");
	  films.classList.add("peopleFilms");
	  imgContainer.classList.add("peopleImgContainer"); // Add class to imgContainer
  
	  // SETTING THE CONTENT OF THE CREATED ELEMENTS
	  name.textContent = person.name;
	  birthYear.textContent = person.birth_year;
	  species.textContent = person.species;
  
	  // Fetch and display homeworld name
	  const homeworldData = await fetchDetails(person.homeworld);
	  homeworld.textContent = `Homeworld: ${homeworldData.name}`;
  
	  // Fetch and display film names
	  const filmNames = await Promise.all(person.films.map(async (filmUrl) => {
		const filmData = await fetchDetails(filmUrl);
		return filmData.title;
	  }));
	  films.textContent = `Films: ${filmNames.join(", ")}`;
  
	  // Create and append an image for each character
	  const img = document.createElement("img");
	  img.src = `assets/pictures/SW-ppl-1-Luke.webp`;
	  img.src = `assets/pictures/SW-ppl-2-C-3PO.png`;
	  img.alt = person.name;
	  img.classList.add("peopleImg");
	  imgContainer.appendChild(img);
	}
  };
  

  */

const peopleList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/people`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/people?page=${page}`);
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

let i = 1; // Add counter for images
const renderData = async (people) => {
  for (const person of people) {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const birthYear = document.createElement("span");
    const species = document.createElement("span");
    const homeworld = document.createElement("span");
    const films = document.createElement("span");
    const imgContainer = document.createElement("span"); // Container for images

    // APPENDING ELEMENTS
    peopleList.append(li);
    li.append(name, birthYear, species, homeworld, films, imgContainer); // Add imgContainer

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("peopleName");
    birthYear.classList.add("peopleBirthYear");
    species.classList.add("peopleSpecies");
    homeworld.classList.add("peopleHomeworld");
    films.classList.add("peopleFilms");
    imgContainer.classList.add("peopleImgContainer"); // Add class to imgContainer

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = person.name;
    birthYear.textContent = person.birth_year;
    species.textContent = person.species;

    
    // Fetch and display species names
    const speciesNames = await Promise.all(person.species.map(async (speciesUrl) => {
      const speciesData = await fetchDetails(speciesUrl);
      return speciesData.title;
      }));
    species.textContent = ` ${speciesNames.join(", ")}`;

    // Fetch and display homeworld name
    const homeworldData = await fetchDetails(person.homeworld);
    homeworld.textContent = ` ${homeworldData.name}`;

    // Fetch and display film names
    const filmNames = await Promise.all(person.films.map(async (filmUrl) => {
      const filmData = await fetchDetails(filmUrl);
      return filmData.title;
    }));
    films.textContent = ` ${filmNames.join(", ")}`;

    // Create and append an image for each character
    const img = document.createElement("img");
    img.src = `assets/pictures/SW-ppl-${i}.webp`; // Use counter i to reference different images
    img.alt = person.name;
    img.classList.add("peopleImg");
    imgContainer.appendChild(img);

    i++; // increment counter for next iteration
    if (i > 10) { i = 1; } // reset counter if you have only 2 images
  }
};

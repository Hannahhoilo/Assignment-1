/* Asynchronous JavaScript and Fetch API */


/* DENNE FUNKER VELDIG BRA TIL OPPGAVEN SIKKERT 
her har jeg lært å hente mange ting */ 

/*
const fetchData = async ()=>{
	const response = await fetch('https://swapi.dev/api/people');
	const data = await response.json();
	
	data.results.forEach(element => {
		console.log(element.name);
		console.log(element.height);
		console.log(element.gender)
	});
}

fetchData()
*/



/*

fetch('https://restcountries.com/v3.1/name/norway')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name.common);
        console.log(data[0].capital);
		console.log(data[0].population);
		console.log(data[0].currencies);
		console.log(data[0].region);
    })
    .catch((error) => console.log(error));

*/

/* denne koden er fra chatgpt */
/*
const fetchData = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();

        const dataContainer = document.getElementById('dataContainer');

        data.results.forEach(element => {
            const personInfo = document.createElement('div');
            personInfo.innerHTML = `<p>Name: ${element.name}</p><p>Height: ${element.height}</p><p>Gender: ${element.gender}</p>`;
            dataContainer.appendChild(personInfo);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

*/

/*

const usersList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;
const fetchData = async () => {
  const response = await fetch(`https://swapi.dev/api/films/`);
  const data = await response.json();
  console.log(data.results);
  renderData(data.results);

  loadMoreButton.addEventListener("click", async () => {
    if (page >= 2) {
        loadMoreButton.setAttribute('disabled','true')
      return;
    } else page++;
    
    const response = await fetch(`https://swapi.dev/api/films/`);
    const data = await response.json();
    renderData(data.results);
  });
};

fetchData();

const renderData = (users) => {
	results.forEach((element) => {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const id = document.createElement("span");
    const title = document.createElement("span");
    const episodeId = document.createElement("span");
    const email = document.createElement("span");
    const avatarContainer = document.createElement("span");
    const avatar = document.createElement("img");

    // APPENDING ELEMETS
    usersList.append(li);
    li.append(id, title, episodeId, email, avatarContainer);
    avatarContainer.append(avatar);

    // ADDING CLASSES TO THE CREATED ELEMETS
    li.classList.add("createdLi");
    id.classList.add("userID");
    title.classList.add("userTitle");
    episodeId.classList.add("userEpisode_id");
    email.classList.add("userEmail");
    avatarContainer.classList.add("userAvatarContainer");
    avatar.classList.add("userImage");

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    id.textContent = element.id;
    title.textContent = element.title;
    episodeId.textContent = element.episode_id;
    email.textContent = element.email;
    avatar.src = element.avatar;
  });
};


*/
/*
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

      const nextPageResponse = await fetch(`https://swapi.dev/api/films/?page=${page}`);
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

    // APPENDING ELEMENTS
    filmsList.append(li);
    li.append(title, episodeId, openingCrawl);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    title.classList.add("filmTitle");
    episodeId.classList.add("filmEpisodeId");
	openingCrawl.classList.add("openingCrawl")

    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    title.textContent = film.title;
    episodeId.textContent = `Episode ${film.episode_id}`;
	openingCrawl.textContent = openingCrawl;
  });
};

*/

/*

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

let i = 1; // Add counter for images
const renderData = async (people) => {
  for (const person of people) {    

    // CREATING ELEMENTS
    const li = document.createElement("li");
    const title = document.createElement("span");
    const episodeId = document.createElement("span");
    const openingCrawl = document.createElement("span");
    const director = document.createElement("span");
    const releaseDate = document.createElement("span");
    const imgContainer = document.createElement("span");

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
    imgContainer.classList.add("peopleImgContainer");


    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    title.textContent = film.title;
    episodeId.textContent = `Episode ${film.episode_id}`;
    openingCrawl.textContent = film.opening_crawl;
    director.textContent = film.director;
    releaseDate.textContent = film.release_date;

      // Create and append an image for each character
      const img = document.createElement("img");
      img.src = `assets/pictures/Films/SW-EP-${i}.jpg`; // Use counter i to reference different images
      img.alt = person.name;
      img.classList.add("peopleImg");
      imgContainer.appendChild(img);
  
      i++; // increment counter for next iteration
      if (i > 10) { i = 1; } // reset counter if you have only 2 images
    }  

    
  });
};


*/

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

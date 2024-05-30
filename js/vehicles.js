const vehiclesList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/vehicles`);
    const data = await response.json();

    console.log(data.results);
    renderData(data.results);

    loadMoreButton.addEventListener("click", async () => {
      if (page >= data.count / data.results.length) {
        loadMoreButton.setAttribute('disabled', 'true');
        return;
      } else page++;

      const nextPageResponse = await fetch(`https://swapi.dev/api/vehicles?page=${page}`);
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

const renderData = async (vehicles) => {
  for (const vehicle of vehicles) {
    const li = document.createElement("li");
    const name = document.createElement("span");
    const model = document.createElement("span");
    const costInCredits = document.createElement("span");
    const films = document.createElement("span");
    const pilots = document.createElement("span");
    const imgContainer = document.createElement("span");

    // Appending elements 
    vehiclesList.append(li);
    li.append(name, model, costInCredits, films, pilots, imgContainer);
    
    // Adding classes to the created elements
    li.classList.add("createdLi");
    name.classList.add("vehicleName");
    model.classList.add("vehicleModel");
    costInCredits.classList.add("vehicleCostOnCredits");
    films.classList.add("vehicleFilms");
    pilots.classList.add("vehiclePilots");
    imgContainer.classList.add("vehicleImgContainer");

    // Setting the content of the created elements
    name.textContent = vehicle.name;
    model.textContent = ` ${vehicle.model}`;
    costInCredits.textContent = ` ${vehicle.cost_in_credits}`;
    pilots.textContent = vehicle.pilots;


    // Fetch and display film names
    const filmNames = await Promise.all(vehicle.films.map(async (filmUrl) => {
      const filmData = await fetchDetails(filmUrl);
      return filmData.title;
    }));
    films.textContent = ` ${filmNames.join(", ")}`;

    // Fetch and display pilot names without the title
    const pilotNames = await Promise.all(vehicle.pilots.map(async (pilotUrl) => {
      const pilotData = await fetchDetails(pilotUrl);
      return pilotData.name;
    }));
    pilots.textContent = `${pilotNames.join(", ")}`;


    // Create and append an image for each vehicle
    const img = document.createElement("img");
    img.src = `assets/pictures/Vehicles/sw-vehicles-${i}.webp`; // Use counter i to reference different images
    img.alt = vehicle.name;
    img.classList.add("vehicleImg");
    imgContainer.appendChild(img);
  
	  i++; // increment counter for next iteration
    if (i > 8) { i = 1; } // reset counter if you have only 2 images
  }
};

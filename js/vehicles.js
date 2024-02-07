/*

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

      const nextPageResponse = await fetch(`https://swapi.dev/api/vehicles`);
      const nextPageData = await nextPageResponse.json();
      renderData(nextPageData.results);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const renderData = (vehicles) => {
  vehicles.forEach((vehicle) => {
    // CREATING ELEMENTS
    const li = document.createElement("li");
    const name = document.createElement("span");
    const model = document.createElement("span");
    const costInCredits = document.createElement("span");
    const films = document.createElement("span");
    const pilots = document.createElement("span");
    const pictureContainer = document.createElement("span");
    const picture = document.createElement("img");

    // APPENDING ELEMENTS
    vehiclesList.append(li);
    li.append(name, model, costInCredits, films, pilots, picture, pictureContainer);
    pictureContainer.append(picture);

    // ADDING CLASSES TO THE CREATED ELEMENTS
    li.classList.add("createdLi");
    name.classList.add("vehicleName");
    model.classList.add("vehicleModel");
    costInCredits.classList.add("vehicleCostOnCredits");
    films.classList.add("vehicleFilms");
    pilots.classList.add("vehiclePilots")
    pictureContainer.classList.add("filmPictureContainer");
    picture.classList.add("filmPicture");


    // SETTING THE CONTENT OF THE CREATED ELEMENTS
    name.textContent = vehicle.name;
    model.textContent = `Episode ${vehicle.model}`;
    costInCredits.textContent = vehicle.cost_in_credits;
    films.textContent = vehicle.films;
    pilots.textContent = vehicle.pilots;
    picture.textContent = vehicle.picture;

    picture.src="../assets/pictures/st-ep-4-cover.jpg"
  });
};


*/


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

const renderData = async (vehicles) => {
  for (const vehicle of vehicles) {
    const li = document.createElement("li");
    const name = document.createElement("span");
    const model = document.createElement("span");
    const costInCredits = document.createElement("span");
    const films = document.createElement("span");
    const pilots = document.createElement("span");
    const pictureContainer = document.createElement("span");
    const picture = document.createElement("img");

    vehiclesList.append(li);
    li.append(name, model, costInCredits, films, pilots, picture, pictureContainer);
    pictureContainer.append(picture);

    li.classList.add("createdLi");
    name.classList.add("vehicleName");
    model.classList.add("vehicleModel");
    costInCredits.classList.add("vehicleCostOnCredits");
    films.classList.add("vehicleFilms");
    pilots.classList.add("vehiclePilots");
    pictureContainer.classList.add("filmPictureContainer");
    picture.classList.add("filmPicture");

    name.textContent = vehicle.name;
    model.textContent = `Model: ${vehicle.model}`;
    costInCredits.textContent = `Cost in Credits: ${vehicle.cost_in_credits}`;

    // Fetch and display film names
    const filmNames = await Promise.all(vehicle.films.map(async (filmUrl) => {
      const filmData = await fetchDetails(filmUrl);
      return filmData.title;
    }));
    films.textContent = `Films: ${filmNames.join(", ")}`;

    // Fetch and display pilot names
    const pilotNames = await Promise.all(vehicle.pilots.map(async (pilotUrl) => {
      const pilotData = await fetchDetails(pilotUrl);
      return pilotData.name;
    }));
    pilots.textContent = `Pilots: ${pilotNames.join(", ")}`;

    picture.src = "../assets/pictures/st-ep-4-cover.jpg"; // You can replace this with the actual picture URL
  }
};

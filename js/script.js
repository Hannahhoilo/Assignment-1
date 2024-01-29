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

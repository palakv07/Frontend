let url = "https://api.nationalize.io?name=nathaniel";
const countryInfo = document.getElementById("country-info");
const data = fetch(url);
setTimeout(() => {
    console.log("done");
},3000);
data.then((data) => {                //promise consumed through then and catch method
    return data.json();
}).then((original) =>{
    const country = original.country[4];
    countryInfo.textContent = `Country: ${country.country_id}, Probability: ${country.probability}`;
}).catch((error) => {
    console.log(error);
});
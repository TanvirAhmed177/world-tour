fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => displayCountries(data));

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries");

  countries.forEach((country) => {
    const countryContainer = document.createElement("div");
    countryContainer.className = "country";

    const countryInfo = `<h3 class = "country-name">${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick = "countryDetail('${country.name}')">Details</button>`;
    countryContainer.innerHTML = countryInfo;
    countriesContainer.appendChild(countryContainer);

    console.log(country.name);
  });
};
const countryDetail = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderCountryInfo(data[0]));
};
const renderCountryInfo = (countryinfo) => {
  console.log(countryinfo);
  const countryDiv = document.getElementById("countryDetail");
  countryDiv.innerHTML = `<h1>${countryinfo.name}</h1>
  <p>Population: ${countryinfo.population}</p>
  <p>Area: ${countryinfo.area}</p>
  <img src="${countryinfo.flag}" alt="" />`;
};

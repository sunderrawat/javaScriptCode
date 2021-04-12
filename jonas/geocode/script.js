"use strict";

const country = document.querySelector(".countries");

const whereIAm = function (lon, lat) {
  return fetch(`https://geocode.xyz/${lon},${lat}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response not get from geocoding ${response.status}`);
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      country.insertAdjacentText(
        "beforeend",
        `You are in ${data.city}, ${data.region}, ${data.country}`
      );
      console.log(data);
      console.log(`You are in ${data.city}, ${data.region}, ${data.country}`);
    })
    .catch((err) => {
      country.insertAdjacentText(
        "beforeend",
        `Someting went wrong ${err.message}`
      );
      console.log(`Someting went wrong ${err.message}`);
    });
};
whereIAm("-33.933", "18.474");
whereIAm("19.037", "72.873");
whereIAm("52.508", "13.381");

whereIAm("-33.933", "18.474");
whereIAm("19.037", "72.873");
whereIAm("52.508", "13.381");

whereIAm("-33.933", "18.474");
whereIAm("19.037", "72.873");
whereIAm("52.508", "13.381");

whereIAm("-33.933", "18.474");
whereIAm("19.037", "72.873");
whereIAm("52.508", "13.381");

whereIAm("-33.933", "18.474");
whereIAm("19.037", "72.873");
whereIAm("52.508", "13.381");
// whereIAm('33.933', '18.474');
// whereIAm('75.933', '18.474');

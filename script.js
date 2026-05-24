var tempDoc = document.getElementById("temp");
var windDoc = document.getElementById("wind");
var dateDoc = document.getElementById("date");

var tempC;
var windspeed;
var date;

onStart();
setInterval(() => {
  loadtemp();
}, 6000);

function onStart() {
  loadtemp();
}

function loadtemp() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=41.7317&longitude=-93.6001&current_weather=true",
  )
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      tempC = data.current_weather.temperature;
      windspeed = data.current_weather.windspeed;
      date = data.current_weather.time.substring(0, 9);

      var tempF;

      tempF = (tempC * 9) / 5 + 32;

      windspeed = windspeed * 0.621371;
      tempDoc.innerHTML = tempF + "\u00B0";
      windDoc.innerHTML = windspeed + " MPH";
      dateDoc.innerHTML = date;
    })

    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

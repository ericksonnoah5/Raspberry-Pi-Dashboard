var tempDoc = document.getElementById("temp");
var windDoc = document.getElementById("wind");
var dateDoc = document.getElementById("date");
var timeDoc = document.getElementById("time");

var time;
var tempC;
var windspeed;
var date;

onStart();
setInterval(() => {
  loadtemp();
  gettime();
}, 6000);

function onStart() {
  loadtemp();
  gettime();
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
      date = data.current_weather.time.substring(0, 10);

      var tempF;

      tempF = (tempC * 9) / 5 + 32;

      windspeed = windspeed * 0.621371;
      tempDoc.innerHTML = tempF + "\u00B0";
      windDoc.innerHTML = parseInt(windspeed) + " mph Wind";
    })

    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
function gettime() {
  fetch("https://timeapi.io/api/time/current/zone?timeZone=America/Chicago")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      date = data.date.substring(0, 10);
      time = data.time;
      var hourNum = parseInt(time.substring(0, 2));
      dateDoc.innerHTML = date;
      if (hourNum === 0) {
        timeDoc.innerHTML = "12" + time.substring(2, 5);
      } else if (hourNum > 12) {
        timeDoc.innerHTML = (hourNum - 12) + time.substring(2, 5);
      } else {
        timeDoc.innerHTML = hourNum + time.substring(2, 5);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

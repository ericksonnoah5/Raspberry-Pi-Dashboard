var tempDoc = document.getElementById("temp");
var windDoc = document.getElementById("wind");
var dateDoc = document.getElementById("date");
var timeDoc = document.getElementById("time");
var imgDoc = document.getElementById("img");

var time;
var tempC;
var windspeed;
var date;
var count = 0;

onStart();
setInterval(() => {
  loadtemp();
  gettime();

  count += 1;
  if (count % 3 == 0) {
    imgDoc.src = "./photos/img.JPG";
  } else if (count % 3 == 1) {
    imgDoc.src = "./photos/img2.jpeg";
  } else {
    imgDoc.src = "./photos/img3.PNG";
  }
}, 60000);

setInterval(() => {
  gettime();
}, 1000);

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
  const now = new Date();
  timeDoc.innerHTML = now.toLocaleTimeString().substring(0, 4);
  dateDoc.innerHTML = now.toLocaleDateString();
}

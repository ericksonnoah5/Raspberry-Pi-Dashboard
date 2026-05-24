var tempC;
var temp = document.getElementById("temp");

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=41.7317&longitude=-93.6001&current_weather=true",
)
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((data) => {
    tempC = data.current_weather.temperature;
    var tempF;

    tempF = (tempC * 9) / 5 + 32;
    console.log(tempF);
    temp.innerHTML = tempF;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

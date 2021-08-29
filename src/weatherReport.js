function displayReport() {
  const weatherReport = document.querySelector(".weather-report");

  weatherReport.classList.remove("hide");
}

async function makeReportDes(json) {
  console.log(json);
  const response = await fetch(
    `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
  );

  const currDes = document.querySelector(".description");

  const description = document.createElement("h3");
  const icon = document.createElement("img");

  currDes.innerHTML = "";

  description.innerHTML = json.weather[0].description;
  icon.src = response.url;

  currDes.appendChild(description);
  currDes.appendChild(icon);
}

async function makeReportNums(json) {
  const currNum = document.querySelector(".numbers");

  const temp = document.createElement("p");
  const feelsLike = document.createElement("p");
  const pressure = document.createElement("p");
  const humidity = document.createElement("p");
  const tempMin = document.createElement("p");
  const tempMax = document.createElement("p");

  currNum.innerHTML = "";

  temp.innerHTML = `${Math.round(json.main.temp)} °C`;
  feelsLike.innerHTML = `${Math.round(json.main.feels_like)} °C`;
  pressure.innerHTML = `${json.main.pressure} hPa`;
  humidity.innerHTML = `${json.main.humidity} %`;
  tempMin.innerHTML = `${Math.round(json.main.temp_min)} °C`;
  tempMax.innerHTML = `${Math.round(json.main.temp_max)} °C`;

  currNum.appendChild(temp);
  currNum.appendChild(feelsLike);
  currNum.appendChild(tempMin);
  currNum.appendChild(tempMax);
  currNum.appendChild(pressure);
  currNum.appendChild(humidity);
}

function makeImageCB(gifData) {
  const gif = document.getElementById("gif");

  gif.src = gifData.data.images.original.url;
}

export { displayReport, makeReportDes, makeReportNums, makeImageCB };

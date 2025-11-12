const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city");
const submitBtn = document.querySelector("#submit-button");
const errorP = document.querySelector("#error");

//   Elements in div with id of name-date
const cityName = document.querySelector("#city-name");
const date = document.querySelector("#date");

//   Elements in div with id of temp-desc
const tempDegree = document.querySelector("#temp-degree");
const desc = document.querySelector("#desc");

//   Elements in div with id of details
const pressure = document.querySelector("#pressure");
const humidity = document.querySelector("#humidity");

const windSpeed = document.querySelector("#wind-speed");

//   Elements in div with id of other
const windDegreeSpan = document.querySelector("#wind-degree span");
const maxTempSpan = document.querySelector("#temp-max span");
const minTempSpan = document.querySelector("#temp-min span");
const feelsLikeSpan = document.querySelector("#feels-like span");
const icon = document.querySelector("#icon");

window.addEventListener("load", () => {
  const defaultCity = "london";
  fetchAndRender(defaultCity);
});

function removeSkeleton() {
  cityName.classList.remove("skeleton");
  date.classList.remove("skeleton");
  tempDegree.classList.remove("skeleton");
  desc.classList.remove("skeleton");
  pressure.classList.remove("skeleton");
  humidity.classList.remove("skeleton");
  windSpeed.classList.remove("skeleton");
  windDegreeSpan.classList.remove("skeleton");
  maxTempSpan.classList.remove("skeleton");
  minTempSpan.classList.remove("skeleton");
  feelsLikeSpan.classList.remove("skeleton");
  icon.classList.remove("skeleton");
}

cityInput.addEventListener("keyup", () => {
  if (/^[A-Za-z\s'-]+$/.test(cityInput.value)) {
    errorP.style.visibility = "hidden";
    submitBtn.disabled = false;
  } else {
    errorP.textContent =
      "Only alphabet characters (a-z, A-Z), spaces, hyphens, and apostrophes.";
    errorP.style.visibility = "visible";
    submitBtn.disabled = true;
    submitBtn.style.borderColor = "black";
  }
});

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();
  fetchAndRender(city);
});

function windDirection(deg) {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

async function fetchAndRender(city) {
  const APIKey = "YOUR_API_KEY_HERE";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
  const data = await getWeather(url);
  if (data.cod !== 200) {
    const fallBackUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${APIKey}&units=metric`;
    const fallBackData = await getWeather(fallBackUrl);
    errorP.textContent = "City with the given name could not be found.";
    errorP.style.visibility = "visible";
    render(fallBackData);
  } else {
    render(data);
    cityInput.value = "";
  }
}
async function getWeather(url) {
  try {
    return await (await fetch(url)).json();
  } catch (error) {
    console.error(error);
  }
}

function render(data) {
  removeSkeleton();
  const now = new Date();
  cityName.textContent = data.name;
  date.textContent = `${now.toLocaleString("en-us", {
    weekday: "long",
  })}, ${now.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
  tempDegree.textContent = data.main.temp + "°C";
  desc.textContent = data.weather[0].description
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  pressure.textContent = data.main.pressure + "hpa";
  windSpeed.textContent = data.wind.speed + "km/h";
  humidity.textContent = data.main.humidity + "%";
  windDegreeSpan.textContent = `${data.wind.deg} - ${windDirection(
    data.wind.deg
  )}`;
  feelsLikeSpan.textContent = data.main.feels_like + "°C";
  maxTempSpan.textContent = data.main.temp_max + "°C";
  minTempSpan.textContent = data.main.temp_min + "°C";
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.src = iconUrl;
}

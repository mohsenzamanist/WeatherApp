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

async function fetchAndRender(city) {
  const APIKey = "f404cb64a0a4fcd6b8867678cd73a93e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
  const data = await getWeather(url);
  console.log(data);
  render(data);
}

cityInput.addEventListener("keyup", () => {
  if (/^[A-Za-z\s'-]+$/.test(cityInput.value)) {
    errorP.style.visibility = "hidden";
    submitBtn.disabled = false;
  } else {
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

async function getWeather(url) {
  try {
    return await (await fetch(url)).json();
  } catch (error) {
    console.error(error);
  }
}

function render(data) {
  const now = new Date();
  cityName.textContent = data.name;
  date.textContent = `${now.toLocaleString("en-us", {
    weekday: "long",
  })}, ${now.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
  tempDegree.textContent = data.main.temp;
  desc.textContent = data.weather[0].description;
  pressure.textContent = data.main.pressure;
  windSpeed.textContent = data.wind.speed;
  humidity.textContent = data.main.humidity;
  windDegreeSpan.textContent = data.wind.deg;
  feelsLikeSpan.textContent = data.main.feels_like;
  maxTempSpan.textContent = data.main.temp_max;
  minTempSpan.textContent = data.main.temp_min;
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.src = iconUrl;
}

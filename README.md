# 🌤️ Weather App

A simple, elegant, and responsive **Weather App** built with **HTML**, **CSS**, and **JavaScript** that allows users to search for real-time weather data of any city.  
The app fetches live data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays details like temperature, humidity, pressure, and wind information — all wrapped in a clean, modern UI.

---

## ✨ Features

- 🌍 **City-based weather search**
  - Users can search for any city around the world.
- 💨 **Detailed weather information**
  - Displays temperature, weather description, humidity, pressure, wind speed, and direction.
- 🌡️ **Dynamic weather icons**
  - Weather condition icons fetched directly from the OpenWeather API.
- ⚡ **Skeleton Loader**
  - A sleek **skeleton loading animation** appears while fetching data, giving users a smooth and responsive experience.
- 📱 **Fully Responsive**
  - Works seamlessly on desktop, tablet, and mobile devices.
- 🧭 **Wind direction converter**
  - Converts numerical wind degrees into compass directions (e.g., 90° → “E”).

---

## 🧩 Tech Stack

- **HTML5** – for structure
- **CSS3** – for styling and responsiveness
- **JavaScript (ES6)** – for data fetching and DOM manipulation
- **OpenWeatherMap API** – for real-time weather data

---

## ⚙️ How It Works

1. When the page loads, the app automatically shows weather data for a **default city** (London).
2. Users can type a new city name in the search bar.
3. The app validates the input to ensure it only contains letters, spaces, hyphens, or apostrophes.
4. While the data is being fetched, **skeleton loader animations** appear to indicate loading.
5. Once the data is retrieved:
   - The loader disappears.
   - Weather details update instantly with the latest information.

---

## 🧱 Folder Structure

weather-app/
│
├── index.html # Main HTML file
├── style.css # Styles and responsive design
├── script.js # Main JavaScript logic
└── img/ # Icon images (search, humidity, pressure, etc.)

---

## 🔑 API Setup

1. Get your free API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).
2. Open `script.js` and replace the existing key:

   ```js
   const APIKey = "YOUR_API_KEY_HERE";
   ```

---

## Contribution

Feel free to **fork**, **improve**, and **use** it whereever necessary

> Pull Requests are always welcome!

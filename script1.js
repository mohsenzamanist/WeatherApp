const temperatureData = [
  { time: "5 AM", temp: 10.5, hour: 5 },
  { time: "7 AM", temp: 14.0, hour: 7 },
  { time: "9 AM", temp: 18.2, hour: 9 },
  { time: "11 AM", temp: 21.5, hour: 11 },
  { time: "12 PM", temp: 23.0, hour: 12 },
];

const canvas = document.getElementById("singleTempWaveCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const minHour = 5;
const maxHour = 12; // Total time range is 7 hours (5 AM to 12 PM)

const minTemp = 10.0; // Lowest temp for color/scale normalization
const maxTemp = 25.0; // Highest temp for color/scale normalization
const y_offset = 50; // Padding from top/bottom
const y_scale = (height - 2 * y_offset) / (maxTemp - minTemp);
// Y-scale converts temperature range to canvas pixel range

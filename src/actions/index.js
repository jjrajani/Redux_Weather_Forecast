const API_KEY = `3c0d064bb138de55e8eca0016231961a`;
const API_TARGET = `http://api.openweathermap.org/data/2.5/forecast?`
var query = (city, country) => `q=${city},${country}&appid=${API_KEY}`;

const apiKey = "afaf9c4b1fc94ec941a9c2950eb4a2d4"; 
const form = document.querySelector(".search-form");
const cityInput = document.querySelector(".city-input");
const weatherDetails = document.querySelector(".weather-details");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description-text");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cityName = cityInput.value.trim();
    if (!cityName) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        city.textContent = data.name;
        date.textContent = new Date().toDateString();
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
        windSpeed.textContent = `${data.wind.speed} KM/H`;
        humidity.textContent = `${data.main.humidity}%`;

        weatherDetails.style.display = "block";
    } catch (error) {
        alert(error.message);
    }
});

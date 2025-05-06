const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector("#CityInput"); // Make sure the input has id="CityInput"
const card = document.querySelector(".card");
const apiKey = "1f5a7380c7bf840da890bf48094a9bec";

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError("Could not retrieve weather data.");
        }
    } else {
        displayError("Please enter a city.");
    }
});

async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("City not found.");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    card.textContent = ""; // Clear previous data
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const emoji = getWeatherEmoji(data.weather[0].main);

    const cityElem = document.createElement("h2");
    cityElem.textContent = `${cityName} ${emoji}`;

    const tempElem = document.createElement("p");
    tempElem.textContent = `Temperature: ${temperature}°C`;

    const descElem = document.createElement("p");
    descElem.textContent = `Weather: ${description}`;

    card.style.display = "flex";
    card.append(cityElem, tempElem, descElem);
}

function getWeatherEmoji(weather) {
    switch (weather.toLowerCase()) {
        case "clouds":
            return "☁️";
        case "clear":
            return "☀️";
        case "rain":
            return "🌧️";
        case "thunderstorm":
            return "⛈️";
        case "snow":
            return "❄️";
        case "mist":
        case "fog":
            return "🌫️";
        default:
            return "🌈";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.append(errorDisplay);
}
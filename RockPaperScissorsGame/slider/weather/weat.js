const weatherform= document.querySelector(".weatherform");
const CityInput= document.querySelector("CityInput");
const card = document.querySelector(".card")
const apikey="1f5a7380c7bf840da890bf48094a9bec";

weatherform.addEventListener("submit",async event =>{
    event.preventDefault();
    const City = cityInput.value;
    if(city){
        try{
            const weatherData = await getweaterData(city);
            displayweatherInfo(weatherData);

        }
       
            catch(error){
                console.error(error);
                displayError(error);
            
        }

    }
    else{
        displayError("please enter a city");
    }

});
async function getweatherInfo(data){

}
function displayInfo(data){

}
function getWeatherEmoji(weather){

}
function displayError(message){
    const errorDisplay= document.createElement("p")
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent="";
    card.style.display= "flex";
    card.append(errorDisplay);

}
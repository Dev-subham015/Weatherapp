const apikey = 'f7f4f204da1166bf44e7e57d6f6b8e1c';



const form = document.querySelector("#form-input")

const input = document.querySelector("#inpt")
const img = document.querySelector("#hello")

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const city = input.value.trim()
  getData(city)
})

const getData = async (city)=>{
  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  document.querySelector(".two h1").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".two h2").innerHTML = data.name;
  
  document.querySelector("#humid").innerHTML = data.main.humidity + "%";
  
  document.querySelector("#w-speed").innerHTML = data.wind.speed + "Km/h";
  const weatherCondition = data.weather[0].main;
  console.log(weatherCondition)
  if (weatherCondition === "Clear") {
    img.src = "/assets/clear.png";
  } else if (weatherCondition === "Rain") {
    img.src = "/assets/rain.png";
  } else if (weatherCondition === "Clouds") {
    img.src = "/assets/clouds.png";
  } else if (weatherCondition === "Mist") {
    img.src = "/assets/mist.png";
  } else {
    img.src = "/assets/sun.png"; // Optional: a default image for other conditions
  }
}



//for message cross btn

const cross = document.querySelector("#error-message i");

cross.addEventListener("click",()=>{
  document.querySelector("#error-message").style.display = "none";
})
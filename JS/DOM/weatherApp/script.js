let inputTag = document.getElementById("inputTag");
let btn = document.getElementById("btn");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let condition = document.getElementById("cond");
let humidity = document.getElementById("humid");
let icon = document.getElementById("icon");


let Api_key = "f4172c4f6fdb47baa5b125809241605";

// https://api.weatherapi.com/v1/current.json?key=f4172c4f6fdb47baa5b125809241605&q=mumbai&aqi=no
async function getData(city) {
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${city}&aqi=no`);
    let obj = await data.json();
    updateUI(obj)
}

btn.addEventListener("click", () => {
    let inputCity = inputTag.value;

    if (inputCity != "") {

        inputTag.value = "";

        getData(inputCity)


    }
})

function updateUI(obj) {
    city.innerHTML = obj.location.name + " , " + obj.location.country;
    temp.innerHTML = obj.current.temp_c;
    condition.innerHTML = obj.current.condition.text;
    humidity.innerHTML = obj.current.humidity;
    icon.src = obj.current.condition.icon
} 
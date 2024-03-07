
const key = "ce8fea96a23306aac9f794f22572e65b"

function dadosNaTela(dados) {

    document.querySelector(".city").innerHTML = "Tempo real -  " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description
    document.querySelector(".umi").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dadosNaTela(dados)
}

function clicar() {
    const city = document.querySelector(".inputCity").value

    buscarCity(city)
}


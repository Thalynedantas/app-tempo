const key = 'a2439006a056dff4c0f332f1655c70fd'

function renderInf(dados) {
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(cidade) { // async usado avisar que vou acessar o servidor da api
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())    // usa função assincrona, await aguarda o servidor responder. porque não sabe quanto tempo o servidor da api vai demorar.

    renderInf(dados)
}

function clicked() {
    const cidade = document.querySelector('.input-city').value
    
    searchCity(cidade)
}

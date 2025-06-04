function converter(){
    let celsius = Number(prompt('Digite uma temperatura em °C (Celsius)').replace(',','.'))
    let res = document.querySelector('section#resultado')
    res.innerHTML = `<h2>A temperatura de ${celsius.toString().replace('.',',')}°C, corresponde a...</h2>`
    res.innerHTML += `<p>${(celsius + 273.15).toFixed(2)}°K (Kelvin)</p>`
    res.innerHTML += `<p>${(celsius * 1.8 + 32)}°F (Fahrenheit)</p>`
}
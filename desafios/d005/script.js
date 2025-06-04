function converter() {
    let metros = Number(prompt('Digite uma distância em metros (m)').replace(',','.'))
    let res = document.querySelector('section#resultados')

    res.innerHTML = `<h2>A distância de ${metros.toString().replace('.',',')} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${(metros / 1000).toFixed(3).replace('.',',')} quilômetros (km)`
    res.innerHTML += `<p>${(metros / 100).toFixed(3).replace('.',',')} Hectômetro (hm)`
    res.innerHTML += `<p>${(metros / 10).toFixed(3).replace('.',',')} Decâmetro (dam)`
    res.innerHTML += `<p>${(metros * 10).toLocaleString('pt-br')} Decímetro (dm)`
    res.innerHTML += `<p>${(metros * 100).toLocaleString('pt-br')} Centímetro (cm)`
    res.innerHTML += `<p>${(metros * 1000).toLocaleString('pt-br')} Milímetro (mm)`
}
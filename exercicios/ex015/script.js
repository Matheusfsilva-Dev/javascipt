function verificar(){
    //variaveis
    let agora = new Date()
    let res = document.querySelector('section#res')

    //resultados
    res.innerHTML = `<p>Dia: <mark>${(agora).getDate()}</mark></p>`
    res.innerHTML += `<p>Mês: (irei fazer depois)</p>`
    res.innerHTML += `<p>Ano: <mark>${(agora).getFullYear()}</mark></p>`
    res.innerHTML += `<p>Dia da semana: (irei fazer depois)</p>`
    res.innerHTML += `<p>Hora: <mark>${(agora).getHours()}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${(agora).getMinutes()}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${(agora).getSeconds()}</mark></p>`
}

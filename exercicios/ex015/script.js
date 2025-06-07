function verificar(){
    //Variaveis
    let agora = new Date()
    let res = document.querySelector('section#res')

    //Resultados
    //Dia do mês
    res.innerHTML = `<p>Dia: <mark>${(agora).getDate()}</mark></p>`

    //Mês atual
    switch ((agora).getMonth() + 1){
        case 1:
            res.innerHTML += `<p>Mês: <mark>Jan</mark></p>`
            break
        case 2:
            res.innerHTML += `<p>Mês: <mark>Fev</mark></p>`
            break
        case 3:
            res.innerHTML += `<p>Mês: <mark>Mar</mark></p>`
            break
        case 4:
            res.innerHTML += `<p>Mês: <mark>Abr</mark></p>`
            break
        case 5:
            res.innerHTML += `<p>Mês: <mark>Mai</mark></p>`
            break
        case 6:
            res.innerHTML += `<p>Mês: <mark>Jun</mark></p>`
            break
        case 7:
            res.innerHTML += `<p>Mês: <mark>Jul</mark></p>`
            break
        case 8:
            res.innerHTML += `<p>Mês: <mark>Ago</mark></p>`
            break
        case 9:
            res.innerHTML += `<p>Mês: <mark>Set</mark></p>`
            break
        case 10:
            res.innerHTML += `<p>Mês: <mark>Out</mark></p>`
            break
        case 11:
            res.innerHTML += `<p>Mês: <mark>Nov</mark></p>`
            break
        case 12:
            res.innerHTML += `<p>Mês: <mark>Dez</mark></p>`
            break
        
    }

    //Ano atual
    res.innerHTML += `<p>Ano: <mark>${(agora).getFullYear()}</mark></p>`

    //Dia da semana
    switch ((agora.getDay())){
        case 0:
            res.innerHTML += `<p>Dia da semana: <mark>Dom</mark></p>`
            break
        case 1:
            res.innerHTML += `<p>Dia da semana: <mark>Seg</mark></p>`
            break
        case 2:
            res.innerHTML += `<p>Dia da semana: <mark>Ter</mark></p>`
            break
        case 3:
            res.innerHTML += `<p>Dia da semana: <mark>Qua</mark></p>`
            break
        case 4:
            res.innerHTML += `<p>Dia da semana: <mark>Qui</mark></p>`
            break
        case 5:
            res.innerHTML += `<p>Dia da semana: <mark>Sex</mark></p>`
            break
        case 6:
            res.innerHTML += `<p>Dia da semana: <mark>Sáb</mark></p>`
            break
    }

    //Hora atual
    res.innerHTML += `<p>Hora: <mark>${(agora).getHours()}</mark></p>`

    //Minuto atual
    res.innerHTML += `<p>Minutos: <mark>${(agora).getMinutes()}</mark></p>`

    //Segundo atual
    res.innerHTML += `<p>Segundos: <mark>${(agora).getSeconds()}</mark></p>`
}

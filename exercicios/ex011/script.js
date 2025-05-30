function chamar() {
    let nome = prompt(`Qual é o nome do aluno?`)
    let nota1 = Number(prompt(`Qual a primeira nota de ${nome}?`))
    let nota2 = Number(prompt(`Qual a segunda nota de ${nome}?`))
    media = (nota1 + nota2) / 2

    let mensagem 
    if (media < 6) {
        mensagem = 'Estude um puco mais!'
    } else {
        mensagem = 'Meus parabéns!'
    }

    let res = document.querySelector('div#res')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    res.innerHTML += `<p>A media final será <mark>${media}</mark></p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">${mensagem}</strong></p>`
}


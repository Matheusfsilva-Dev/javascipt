function iniciar() {
    let anoAtual = new Date().getFullYear()
    let anoNascimento = Number(prompt('Em que ano você nasceu?'))
    let res = document.querySelector('section#res')

    res.innerHTML = `Teste ${anoNascimento}`
    res.innerHTML = `<p>Quem nasceu em ${anoNascimento} vai completar <strong>${(anoAtual - anoNascimento)}</strong> anos em ${anoAtual}.</p>`
} 
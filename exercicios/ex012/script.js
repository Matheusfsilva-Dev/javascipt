function verificar(){
    let num = Number(prompt('Digite um número: '))

    let tipo
    if (num % 2 == 0){
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('div#Resultado')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}
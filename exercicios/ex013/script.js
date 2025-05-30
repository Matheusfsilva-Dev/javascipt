function verificar(){
    let num1 = Number(prompt('Digite um número: '))
    let num2 = Number(prompt('Digite outro número: '))

    let maior
    if (num1 > num2){
        maior = `<strong>${num1}</strong>`
    }else if (num1 < num2) {
        maior = `<strong>${num2}</strong>`
    }else {
        let res = document.querySelector('section#resultado')
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong></p>`
        return
    }

    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é ${maior}</p>`
}


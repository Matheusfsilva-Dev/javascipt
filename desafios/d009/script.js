function reajuste() {
    //variaveis
    let nome = prompt('Qual é o nome ddo funcionário?')
    let salario = Number(prompt(`Qual é o salario de ${nome}`).replace(',','.'))
    let porcentagem = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = salario * porcentagem / 100
    let res = document.querySelector('section#resultado')

    //resultado
    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!`
    res.innerHTML += `<p>O salário atual era ${(salario).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${(aumento).toLocaleString('pt-BR' , {style:'currency', currency:'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${(salario + aumento).toLocaleString('pt-BR' , {style:'currency', currency:'BRL'})}.</p>`
}
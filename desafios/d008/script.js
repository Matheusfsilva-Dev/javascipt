function desconto() {
    //variaveis
    let item = prompt('Qual é o produto que você está comprando?')
    let preço = Number(prompt(`Qual é o preço de ${item}?`))
    let desconto = preço * 10 / 100
    let res = document.querySelector('section#resultado')
    
    //resultados
    res.innerHTML = `<h2>Calculando desconto de 10% para ${item}</h2>`
    res.innerHTML += `<p>O valor original era ${(preço).toLocaleString('pt-BR' , {style:'currency' ,  currency:'BRL'})}`
    res.innerHTML += `<p>Você acaba de ganhar ${(desconto).toLocaleString('pt-BR' , {style:'currency' ,  currency:'BRL'})} de desconto (-10%)</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${(preço - desconto).toLocaleString('pt-BR' , {style:'currency' ,  currency:'BRL'})} no produto ${item}</p>`
}
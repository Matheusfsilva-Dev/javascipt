function calcular() {
    //variaveis
    let n1 = Number(prompt('Qual é o valor de a?'))
    let n2 = Number(prompt('Qual é o valor de b?'))
    let n3 = Number(prompt('Qual é o valor de c?'))
    let delta = n2 ** 2 - 4 * n1 * n3
    let res = document.querySelector('section#resultado')
    
    //resultado
    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    res.innerHTML += `<p>A equação atual é <strong>${n1}x<sup>2</sup> + ${n2}x + ${n3} = 0</strong></p>`
    res.innerHTML += `<p>O calculo realizado será <strong>&#8710; = ${n2}<sup>2</sup> - 4 . ${n1} . ${n3}</strong></p>`
    res.innerHTML += `<p> o valo calculado foi <mark><strong>&#8710; = ${delta}</strong></mark></p>`
}
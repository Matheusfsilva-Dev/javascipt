let vdolar = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?').replace(',','.'))

function converter() {
    let reais = Number(prompt('Quantos R$ voce tem na carteira?'))
    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>A cotação atual do dolar é de U${(vdolar).toLocaleString('en-US', {style:'currency', currency:'USD'})} Dólares e você possui ${(reais).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} Reais`
    res.innerHTML += `<p>Portanto</p>`
    res.innerHTML += `<p>Convertendo você possui U${(reais / vdolar).toLocaleString('en-US',{style:'currency' , currency:'USD'})} Dólares`
}
let res = document.querySelector('div#res')

function chamar(botão) {
    switch (botão) {
        case 1:
            res.innerHTML += `<p>Clicou no primeiro botão</p>`
        break

        case 2:
            res.innerHTML += `<p>Clicou no segundo botão</p>`
        break

        case 3:
            res.innerHTML += `<p>Clicou no terceiro botão</p>`
        break

        case 4:
            res.innerHTML += `<p>Clicou no quarto botão</p>`
        
    }

}
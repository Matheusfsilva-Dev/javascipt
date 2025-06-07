let agora = new Date()
let res = document.querySelector('section#resultado')

function verificar(){
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}
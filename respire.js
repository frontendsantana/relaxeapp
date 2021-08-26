const container = document.querySelector('.container')
const text = document.querySelector('#text')

const tempoTotal= 7500
const tempoRespire = (tempoTotal / 5) * 2
const tempoSegure = tempoTotal / 5

breatheAnimation()

function breatheAnimation (){
    text.innerHTML ='Respire Fundo'
    container.className ='container grow'
    
    setTimeout(() =>{
    text.innerText = 'Segure'
    setTimeout(() =>{
        text.innerText = 'Expire'
        container.className = 'container shrink'

    },tempoSegure)
    
    },tempoRespire)
}
setInterval(breatheAnimation, tempoTotal);


function verificaValidez(chute){
    const numero = +chute // para deixar ele sempre inteiro

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido! Diga apenas numeros</div>`
        return; // para n executar mais nada dessa funçao
    }

    if(chuteMaiorOuMenor(numero)){
      elementoChute.innerHTML += `<div>O numero precisa estar entre ${menorValor} e ${maiorValor}</div>`
      return;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabens!!!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="jogar-novamente">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML = `
        <div class="box-numero-secreto">O numero secreto é <span class="icone"><ion-icon name="arrow-down"></ion-icon></span></div>
        `
    } else{
        elementoChute.innerHTML = `
        <div class="box-numero-secreto">O numero secreto é <span class="icone"><ion-icon name="arrow-up"></ion-icon></span></div>
        `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function chuteMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', event =>{
    if(event.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
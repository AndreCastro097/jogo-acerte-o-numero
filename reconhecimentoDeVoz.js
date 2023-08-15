const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-Br';
  recognition.start();

  recognition.addEventListener('result', (event) =>{
    const chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValidez(chute);
    gameOver(chute);
  })

  function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Voçê disse:</div>
    <span class="box">${chute}</span>
    `
  }

  recognition.addEventListener('end', () => recognition.start());
  // quando a funcao acabar, começa outra vez o evento de reconheçimento de voz

  function gameOver(chute){
    if(chute === 'game over'){
      document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <button id="jogar-novamente" class="jogar-novamente">Jogar Novamente</button>
      `
      document.body.classList.add("fundo-gamer-over");
    }
  }


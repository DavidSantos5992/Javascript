var element = document.getElementById('text')

function action() {
   
   let insert = window.prompt('')

   if(insert == '' || insert == null){
      alert('Erro ao digitar')
   } else {
      element.innerHTML = `Bem vindo ${insert}  `

      let exitButton = document.createElement('button')
      exitButton.innerText = ' sair da conta ' /* inserindo texto html */
      exitButton.onclick = exit; /* limpar tela */
      
      element.appendChild(exitButton)
      console.log('1')

   }
};

function exit(){

   alert('Você saiu')
   element.innerHTML = ' ';
   console.log('2')

};
element = document.getElementById('meia')

let n1 = Number(window.prompt(''));
let n2 = Number(window.prompt(''));

function calc() {
    
    var media = (n1 + n2) / 2;

    if (media < 6) {
        console.log('reprovado')
    } else {
        console.log('aprovado')
    }

   element.innerHTML = `Média ${media}`
}
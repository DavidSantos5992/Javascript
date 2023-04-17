/* 
    abaixo de 17 muito abaixo do peso 
    entre 17 e 18.49 abaixo do peso 
    entre 18.5 e 24.99 peso normal
    entre 25 e 29,99 acima do peso

    peso / (altura * altura)

*/
var peso
var altura
var resultado
var imc 

function calcular(event) {
   event.preventDefault();
   peso = document.getElementById('peso').value
   altura = document.getElementById('altura').value
   resultado = document.getElementById('resultado')

   imc = peso / (altura*altura)
   imc.toFixed(4)

   if (imc < 17) {
    resultado.innerHTML = `Imc:${imc.toFixed(2)} muito abaixo do peso`

   } else if (imc == 17 || imc < 18.5) {
    resultado.innerHTML = `Imc:${imc.toFixed(2)} abaixo do peso`

   } else if (imc == 18.5 || imc < 25) {
    resultado.innerHTML = `Imc:${imc.toFixed(2)} peso normal`

   } else {
    resultado.innerHTML = `Imc:${imc.toFixed(2)} acima do peso`

   }

   peso = document.getElementById('peso').value = ''
   altura = document.getElementById('altura').value = ''

}
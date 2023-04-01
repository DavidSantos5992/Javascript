function pedir() {
    var value = prompt('digite um valor de 1 a 4');

    switch ( Number(value) ) {
        case 1:
            alert('você escolheu Suco')
            break;

        case 2:
            alert('você escolheu Agua')
            break;

        case 3:
            alert('você escolheu Refrigerante')
            break;
      
        case 4:
            alert('você escolheu Lanche')
            break;

        default: 
            alert('escolha de 1 a 4');
            break;
    }
}
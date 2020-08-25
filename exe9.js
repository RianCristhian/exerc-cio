exe9(9)

function exe9(num) {

    var soma = 0
    for (var i = num; i >= 1; i--) {
        if (num % i == 0) { 
            soma = soma + i 
    }
}
    console.log (`Soma dos divisores é: ${soma}`)
}

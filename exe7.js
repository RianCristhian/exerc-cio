
chefe()

function chefe() {
    exe7()
}

function exe7() {
    var soma = 0
    var conta = 0
    var num = prompt(`Informe um número: `)
    do {

        conta++ // soma 1
        soma = soma + num // acumulador 
        num = Number(prompt(`Informe outro número. Digite número negativo para encerrar o programa.`))

    }
    while (num >= 0)

    console.log(`A média dos números é: ${soma / conta}`)
}
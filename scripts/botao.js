export default function botao() {
    const $ = document.querySelector.bind(document);

    const botao = $('#button');
    const peso = $('#peso');
    const altura = $('#altura');
    const resposta = $('#valoResposta');
    const imc = peso / (altura*altura);

    botao.addEventListener('click' ,() => {
        if(imc < '18.5') {
            resposta.innerHTML = `IMC: ${imc} (abaixo do peso)`
        } else if(imc > '18.5' || imc < '24.9') {
            resposta.innerText = `IMC: ${imc} (peso normal)`
        } else if(imc >= '25' || imc < "29.9") {
            resposta.innerText = `IMC: ${imc} (sobrepeso)`
        } else if(imc >= '30' || imc < '34.9') {
            resposta.innerText = `IMC: ${imc} (obesidade grau I)`
        } else if(imc >= '35' || imc < '39.9') {
            resposta.innerText = `IMC: ${imc} (obesidade grau II)`
        } else if(imc >= 40) {
            resposta.innerText = `IMC: ${imc} (obesidade mórbida)`
        }
    })
}
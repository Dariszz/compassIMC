export default function imc() {
    const $ = document.querySelector.bind(document);

    const peso = $('#peso');
    const altura = $('#altura');
    const resposta = $('#resposta');
    const imc = peso * (altura*altura);
    
    if(imc < '18.5'){
        resposta.innerText = `IMC: ${imc}`
    }
}
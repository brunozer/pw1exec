

const form = document.querySelector("#form");


// função principal.

form.addEventListener('submit', (e) => {
e.preventDefault();
const inputPeso = e.target.querySelector("#peso")
const inputAltura = e.target.querySelector("#altura")


const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)

    if(!peso) {
        setResultado("peso inválido", false) 
            return;
    } if(!altura) {
        setResultado("altura invalida", false)
            return;
    }
const imc = calculaImc(peso,altura)
const nivelImc= getNivelImc(imc)
const msg = `seu imc é ${imc}(${nivelImc})`

setResultado(msg, true);
})  


// função que calcula o imc e retorna fixando duas casa decimais.
function calculaImc(peso, altura) {
    const imc = peso / altura**2;
    
    return imc.toFixed(2)
}
// funçãoq que pega o nível do imc
function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'];
        
        if (imc >=39.9)return nivel [5];
        if (imc >=34.9) return nivel [4];
        if (imc >=29.9)return nivel [3];
        if (imc >=24.9)return nivel [2];
        if (imc >=18.5) return nivel [1];
        if(imc <18.5) return nivel [0]


}

    
//função que cria paragrafos
function criaParagrafos() {
const paragrafo = document.createElement("p");
return paragrafo
}
//função que seta resultados;

function setResultado(msg, isValid) {
const resultado = document.querySelector("#resultado");

    resultado.innerHTML ="";
    
    const p = criaParagrafos();
    if(isValid) {

    p.classList.add("paragrafo-resultado")
    }else {
        p.classList.add("paragrafo-incorreto")
    }
    p.innerHTML = msg;
    resultado.appendChild(p)
}







    
    
    
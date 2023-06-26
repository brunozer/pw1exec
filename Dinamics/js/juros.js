const form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
e.preventDefault();
const inputTaxa = e.target.querySelector('#taxa');
const inputParcelas = e.target.querySelector('#parcelas');
const inputValorProduto = e.target.querySelector('#valorProduto');

const valorProduto = parseFloat(inputValorProduto.value);
const taxa = parseFloat(inputTaxa.value) /100;
const parcelas = Number(inputParcelas.value);


const valorTotal = calcularJuros(valorProduto, taxa, parcelas);
  const valorJuros = valorTotal - valorProduto
    if(!valorProduto) {
        setResultado("valor de compra invalido", false) 
        return;

    } if(!taxa) {
        setResultado("valor de taxa inválido", false)
        return;
    } if (!parcelas) {
        setResultado("valor de parcelas invalido", false)
        return
    }
  
    const msg = `O valor total é de ${valorTotal.toFixed(3)}, <br> você pagará ${valorJuros.toFixed(3)} de juros`
 
setResultado(msg, true);
} )



function calcularJuros(valorProduto, taxa, parcelas) {
  
const juros = valorProduto * Math.pow(1 + taxa, parcelas)   ;
return juros;
}  

// cria os paragrafos
function criaParagrafos() {
    const paragrafo = document.createElement("p");
    return paragrafo
}
    
    //função que seta  os resultados;
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
    
    
    
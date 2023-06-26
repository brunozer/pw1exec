const form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
e.preventDefault();
const inputCusto = e.target.querySelector('#custo');
const inputLucro = e.target.querySelector('#lucro');
const inputCustoTransporte = e.target.querySelector('#custoTransporte');
const inputCustoArmazenamento = e.target.querySelector('#custoArmazenamento');
const inputValorcomissao = e.target.querySelector('#valorComissao');


const custo = Number(inputCusto.value);
const lucro = parseFloat(inputLucro.value);
const transporte = Number(inputCustoTransporte.value);
const armazenamento = Number(inputCustoTransporte.value);
const comissao = parseFloat(inputValorcomissao.value);



const valorLucro = precoVenda(custo, lucro, transporte,armazenamento, comissao);

    if(!custo) {
        setResultado("valor de custo invalido", false) 
        return;

    } if(!lucro) {
        setResultado("valor de lucro inválido", false)
        return;
    } if (!transporte) {
        setResultado("valor de transporte invalido", false)
        return
    }if (!armazenamento) {
        setResultado("valor de armazenamento invalido", false)
        return
    }
    
    if (!comissao) {
        setResultado("valor de comissão invalido", false)
        return
    }
  
    const msg = `O valor do produto será de ${valorLucro.toFixed(2)}R$`
 
setResultado(msg, true);
} )



function precoVenda(custo, lucro, transporte, armazenamento, comissao) {

    const lucroVenda = custo * (1 + ((lucro + transporte + armazenamento + comissao) / 100))

    return lucroVenda;
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
    
    
    
function calcularIMC(){
    const altura = parseFloat(document.querySelector("#altura").value);
    const peso = parseFloat(document.querySelector("#peso").value);
    const resultado = document.querySelector(".container_resultado");
    const result1 = document.querySelector(".resultado_esquerdo");
    const result2 = document.querySelector(".resultado_direito");

    if(altura && peso){
        const calcIMC = (peso / (altura ** 2)).toFixed(1);
        let tabelaIMC;
        
        if(calcIMC < 18.5) {
            tabelaIMC = "Atenção! Você está abaixo do peso, podendo ser genético ou sinal de desnutrição.";
            result2.style.color = "#F00";
        } else if (calcIMC >= 18.6 && calcIMC <= 24.9) {
            tabelaIMC = "Parabéns! Você está com o peso ideal, continue mantendo hábitos saudáveis.";
            result2.style.color = "#0F0";
        } else if (calcIMC >= 25.0 && calcIMC <= 29.9) {
            tabelaIMC = "Atenção! Você está levemente acima do peso, embora não esteja obeso; é preciso que reveja seus hábitos";
            result2.style.color = "#FF0";
        } else if (calcIMC >= 30.0 && calcIMC <= 34.9) {
            tabelaIMC = "Atenção! Você está com obesidade Grau I. É preciso ter atenção e acompanhamento médico.";
            result2.style.color = "#F00";
        } else if (calcIMC >= 35.0 && calcIMC <= 39.9) {
            tabelaIMC = "Atenção! Você está com obesidade Grau II. O risco de desenvolver doenças é muito alto, busque ajuda!";
            result2.style.color = "#F00";
        } else if (calcIMC >= 40.0) {
            tabelaIMC = "Atenção! Você está com obesidade Grau III. O risco de desenvolver doenças graves é questão de tempo, busque ajuda!";
            result2.style.color = "#F00";
        }

        result1.innerText = tabelaIMC;
        result2.innerText = calcIMC;

    } else{
        result1.innerText = "Por favor, insira altura e peso válidos para continuar";
        result2.innerText = "";
    }

    resultado.classList.replace("ocultar_resultado", "exibir_resultado");
}

function limparCampo(){
    const altura = document.querySelector("#altura");
    const resultado = document.querySelector(".container_resultado");
    const result1 = document.querySelector(".resultado_esquerdo");
    const result2 = document.querySelector(".resultado_direito");

    result1.innerText = "";
    result2.innerText = "";

    resultado.classList.replace("exibir_resultado", "ocultar_resultado");

    altura.focus(); //garante que ao apagar ele vai dar foco no primeiro campo
}

const limpar = document.querySelector(".botao_limpar");
limpar.addEventListener("click", limparCampo);

const calcular = document.querySelector(".botao_calcular");
calcular.addEventListener("click", calcularIMC);
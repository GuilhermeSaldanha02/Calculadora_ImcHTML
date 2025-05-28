document.addEventListener("DOMContentLoaded", () => {
  const imcForm = document.getElementById("imcForm");
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const resultadoDiv = document.getElementById("resultado");
  const classificacaoDiv = document.getElementById("classificacao");
  const pesoErrorDiv = document.getElementById("peso-error");
  const alturaErrorDiv = document.getElementById("altura-error");

  imcForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    calcularIMC();
  });

  function calcularIMC() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Limpar mensagens de erro
    pesoErrorDiv.textContent = "";
    alturaErrorDiv.textContent = "";
    resultadoDiv.textContent = "";
    classificacaoDiv.textContent = "";

    // Validação de entrada
    let isValid = true;
    if (isNaN(peso) || peso <= 0) {
      pesoErrorDiv.textContent =
        "Por favor, insira um peso válido (maior que 0).";
      isValid = false;
    }
    if (isNaN(altura) || altura <= 0) {
      alturaErrorDiv.textContent =
        "Por favor, insira uma altura válida (maior que 0).";
      isValid = false;
    }
    if (!isValid) {
      return;
    }

    // Definição das constantes para os limites do IMC
    const IMCLimiteAbaixoPeso = 18.5;
    const IMCLimitePesoNormal = 25;
    const IMCLimiteSobrepeso = 30;
    const IMCLimiteObesidadeGrauI = 35;
    const IMCLimiteObesidadeGrauII = 40;

    // Cálculo do IMC
    const imc = peso / (altura * altura);
    resultadoDiv.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    // Classificação do IMC
    let classificacao = "";
    if (imc < IMCLimiteAbaixoPeso) {
      classificacao = "Abaixo do peso";
    } else if (imc < IMCLimitePesoNormal) {
      // imc >= 18.5 && imc < 25
      classificacao = "Peso normal";
    } else if (imc < IMCLimiteSobrepeso) {
      // imc >= 25 && imc < 30
      classificacao = "Sobrepeso";
    } else if (imc < IMCLimiteObesidadeGrauI) {
      // imc >= 30 && imc < 35
      classificacao = "Obesidade grau I";
    } else if (imc < IMCLimiteObesidadeGrauII) {
      // imc >= 35 && imc < 40
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    classificacaoDiv.textContent = `Classificação: ${classificacao}`;
  }
});

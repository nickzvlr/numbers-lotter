// Função principal que realiza o sorteio de números únicos.
function sortear() {
  // Obtém o valor do campo "quantidade" e converte para número inteiro.
  let quantidade = parseInt(document.getElementById("quantidade").value);

  // Obtém o valor do campo "de" (valor mínimo para o sorteio) e converte para número inteiro.
  let de = parseInt(document.getElementById("de").value);

  // Obtém o valor do campo "até" (valor máximo para o sorteio) e converte para número inteiro.
  let ate = parseInt(document.getElementById("ate").value);

  // Cria um array vazio para armazenar os números sorteados.
  let sorteados = [];
  let numero; // Variável para armazenar cada número sorteado.

  // Loop que executa até que a quantidade necessária de números seja sorteada.
  for (let i = 0; i < quantidade; i++) {
    // Gera um número aleatório entre os valores "de" e "ate".
    numero = obterNumeroAleatorio(de, ate);

    // Garante que o número sorteado seja único (não repetido no array `sorteados`).
    while (sorteados.includes(numero)) {
      // Gera outro número aleatório caso o anterior já esteja no array.
      numero = obterNumeroAleatorio(de, ate);
    }

    // Adiciona o número único ao array `sorteados`.
    sorteados.push(numero);
  }

  // Atualiza o elemento HTML para mostrar os números sorteados.
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

  // Chama a função que altera o estado do botão de reiniciar.
  alterarStatusBotao();
}

// Função que gera um número aleatório entre `min` (inclusive) e `max` (exclusivo).
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Função que altera o estado do botão "Reiniciar" (habilitar ou desabilitar).
function alterarStatusBotao() {
  // Obtém o elemento do botão de reiniciar.
  let botao = document.getElementById("btn-reiniciar");

  // Verifica se o botão possui a classe que indica que está desabilitado.
  if (botao.classList.contains("container__botao-desabilitado")) {
    // Remove a classe que desabilita o botão.
    botao.classList.remove("container__botao-desabilitado");
    // Adiciona a classe que habilita o botão.
    botao.classList.add("container__botao");
  } else {
    // Remove a classe que habilita o botão.
    botao.classList.remove("container__botao");
    // Adiciona a classe que desabilita o botão.
    botao.classList.add("container__botao-desabilitado");
  }
}

// Função que reinicia o formulário e os valores na tela.
function reiniciar() {
  // Limpa os campos de entrada do formulário.
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";

  // Restaura o texto padrão no elemento de resultado.
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

  // Chama a função que altera o estado do botão de reiniciar.
  alterarStatusBotao();
}

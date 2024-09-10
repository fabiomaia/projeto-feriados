function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado pelo usuário no campo de pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o usuário digitou algo. Se não, exibe uma mensagem de erro.
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de feriado brasileiro</p>";
      return; // Interrompe a função se o campo estiver vazio.
    }
  
    // Converte a palavra-chave para minúsculas para facilitar a comparação.
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada feriado nos dados.
    for (let dado of dados) {
      // Converte o título, descrição e tags do feriado para minúsculas.
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se a palavra-chave está presente em algum dos campos do feriado.
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se a palavra-chave foi encontrada, adiciona o feriado aos resultados.
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados. Se não, exibe uma mensagem de erro.
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza a seção HTML com os resultados da pesquisa.
    section.innerHTML = resultados;
  }
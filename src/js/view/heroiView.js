import * as base from '../base';

export const limparDetalhes = () => {
  base.elementosDom.main.innerHTML = '';
};

export const exibirDetalhes = heroi => {
  let html = `
    <div class="container personagem">
      <div class="row">
        <div class="col-md-12 mt-4 mb-4 text-left">
          <span class="text-muted voltar">&lt;&lt; Voltar</span>
        </div>
        <div class="col-md-4">
          <img src="${heroi.thumbnail}" class="mx-auto d-block" alt="${heroi.nome} thumbnail">
        </div>
        <div class="col-md-4">
          <h3>${heroi.nome}</h3>
          <p class="text-secondary">${heroi.descricao.length > 0 ? heroi.descricao : 'Descrição não disponível'}</p>
        </div>
        <div class="col-md-4">
          <p>Aparições <small class="text-muted">limitado a 5 resultados por categoria</small></p>
          ${heroi.aparicoes.quadrinho.length > 0 ? '<p>Quadrinhos</p>' + exibirListaAparicoes(heroi.aparicoes.quadrinho) : '' }
          ${heroi.aparicoes.eventos.length > 0 ? '<p>Eventos</p>' + exibirListaAparicoes(heroi.aparicoes.eventos) : '' }
          ${heroi.aparicoes.series.length > 0 ? '<p>Series</p>' + exibirListaAparicoes(heroi.aparicoes.series) : '' }
          ${heroi.aparicoes.historias.length > 0 ? '<p>Historias</p>' + exibirListaAparicoes(heroi.aparicoes.quadrinho) : '' }
        </div>
      </div>
    </div>
  `;
  base.elementosDom.main.insertAdjacentHTML('beforeend', html);
};

const exibirListaAparicoes = arrLista => {
  console.log(arrLista);
  let html = `<ul>`;
  arrLista.forEach((e, i) => {
    if(i < 5) {
      html += `
        <li>
          <p>${arrLista[i].name}</p>
        </li>
      `;
    }
  });
  html += `</ul>`;
  return html;
}

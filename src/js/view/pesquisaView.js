import {TIPO_IMAGEM} from '../Constantes';
import * as base from '../base';

export const limparCampoPesquisa = () => {
  base.elementosDom.campoPesquisa.value = '';
}

export const limparListaResultado = () => {
  base.elementosDom.main.innerHTML = '';
}

export const exibirListaResultado = (query, arrResultado, total) => {
  let htmlListaResultado = `
    <div class="container lista-resultado">
      <div class="row">
        <div class="col-md-6 mt-4 text-sm-center text-md-left">
          <span class="text-muted">Resultado da busca por: ${query}</span>
        </div>
        <div class="col-md-6 mt-4 text-sm-center text-md-right">
          <span class="text-muted">Exibindo ${arrResultado.length} de ${total} heróis</span>
        </div>
        ${arrResultado.length > 0 ? exibirElementoLista(arrResultado) : '<h2 class="text-center">Nenhum personagem encontrado.</h2>'}
      </div>
      ${exibirVerMais(arrResultado.length, total)}
    </div>
  `;
  base.elementosDom.main.insertAdjacentHTML('beforeend', htmlListaResultado);
}

const limitarDescricao = (descricao, limite = 100) => {
  const arrNovaDescricao = [];
  if (descricao.length > limite) {
        descricao.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limite) {
                arrNovaDescricao.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${arrNovaDescricao.join(' ')} ...`;
    }
    return descricao;
}

const exibirElementoLista = arrResultado => {
  let html = '';
  arrResultado.forEach(e => {
    html += `
      <div class="col-md-4 mt-4 pb-4 border-bottom lista-resultado--heroi" data-id="${e.id}">
        <img src="${e.thumbnail.path}/${TIPO_IMAGEM}.${e.thumbnail.extension}" alt="${e.name} thumbnail">
        <div class="ml-3 lista-resultado--heroi__descricao">
          <h3>${e.name}</h3>
          <p class="text-secondary">${limitarDescricao(e.description, 70)}</p>
          <button class="btn btn-primary" type="button" name="button">Saiba Mais</button>
        </div>
      </div>
    `;
  });
  return html;
}

const exibirVerMais = (tamanhoArrResultado, total) => {
  let html = '';
  if (tamanhoArrResultado !== total) {
    html = `
      <div class="row mt-5 lista-resultado--mais">
        <button class="btn btn-primary ver-mais" type="button" name="button">Mais resultados</button>
      </div>
    `;
  }
  return html;
}

import * as base from './base';
import {LIMITE} from './Constantes';

import Pesquisa from './model/Pesquisa';
import Heroi from './model/Heroi';

import * as pesquisaView from './view/pesquisaView';
import * as heroiView from './view/heroiView';

// Estado da aplicação
const estado = [];

const pesquisar = () => {
  let query = base.elementosDom.campoPesquisa.value;
  if(query) {
    estado.query = query;
    estado.pesquisa = new Pesquisa(query);
    try {
      getChamada();
    } catch (e) {
      console.log(e);
    }
  }
}

const getChamada = async() => {
  base.loader(base.elementosDom.main);
  await estado.pesquisa.getResultado();
  pesquisaView.limparListaResultado();
  pesquisaView.limparCampoPesquisa();
  pesquisaView.exibirListaResultado(estado.query, estado.pesquisa.resultado.data.results, estado.pesquisa.resultado.data.total);
  base.removerLoader(base.elementosDom.main);
}

const detalhesHeroi = async(idHeroi) => {
  if(idHeroi) {
    estado.heroi = new Heroi(idHeroi);
    try {
      base.loader(base.elementosDom.main);
      await estado.heroi.getHeroi();
      heroiView.limparDetalhes();
      heroiView.exibirDetalhes(estado.heroi);
      base.removerLoader(base.elementosDom.main);
    } catch (e) {
      console.log(e);
    }
  }
}

//Eventos
base.elementosDom.formularioPesquisa.addEventListener('submit', e => {
  e.preventDefault();
  pesquisar();
});

//Evento "ver mais"
base.elementosDom.main.addEventListener('click', e => {
  if(e.target.matches('.ver-mais')) {
    if(estado.query) {
      const elemetosExibidos = estado.pesquisa.resultado.data.results.length;
      estado.pesquisa = new Pesquisa(estado.query, elemetosExibidos + LIMITE);
      try {
        getChamada();
      } catch (e) {
        console.log(e);
      }
    }
  } else if (e.target.parentElement.matches('.lista-resultado--heroi')) {
    detalhesHeroi(e.target.parentElement.dataset.id);
  } else if (e.target.parentElement.matches('.lista-resultado--heroi__descricao')) {
    detalhesHeroi(e.target.parentElement.parentElement.dataset.id);
  }
});

//Evento "voltar"
base.elementosDom.main.addEventListener('click', e => {
  if(e.target.matches('.voltar')) {
    pesquisaView.limparCampoPesquisa();
    pesquisaView.limparListaResultado();
    pesquisaView.exibirListaResultado(estado.query, estado.pesquisa.resultado.data.results, estado.pesquisa.resultado.data.total);
  }
});

import axios from 'axios';
import {TIMESTAMP, API_KEY, HASH} from '../Constantes';

class Heroi {
  constructor(id) {
    this.id = id;
  }

  async getHeroi() {
    try {
      const res = await axios(
        `https://gateway.marvel.com:443/v1/public/characters/${this.id}?ts=${TIMESTAMP}&hash=${HASH}&apikey=${API_KEY}`
      );
      this.nome = res.data.data.results[0].name;
      this.descricao = res.data.data.results[0].description;
      this.thumbnail = `${res.data.data.results[0].thumbnail.path}/portrait_uncanny.${res.data.data.results[0].thumbnail.extension}`;
      this.aparicoes = {
        quadrinho: res.data.data.results[0].comics.items,
        eventos: res.data.data.results[0].events.items,
        series: res.data.data.results[0].series.items,
        historias: res.data.data.results[0].stories.items
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default Heroi;

import axios from 'axios';
import {TIMESTAMP, API_KEY, HASH} from '../Constantes';

class Pesquisa {
  constructor(query, limit = 9, offset = 0) {
    this.query = query;
    this.limit = limit;
    this.offset = offset;
  }

  async getResultado() {
    try {
      const res = await axios(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.query}&limit=${this.limit}&offset=${this.offset}&ts=${TIMESTAMP}&hash=${HASH}&apikey=${API_KEY}`
      );
      this.resultado = res.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Pesquisa;

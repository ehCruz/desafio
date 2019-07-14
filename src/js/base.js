export const elementosDom = {
  formularioPesquisa: document.querySelector('.pesquisa--formulario'),
  campoPesquisa: document.querySelector('.pesquisa--input'),
  botaoPesquisa: document.querySelector('.pesquisa--botao'),
  main: document.querySelector('.main')
}

export const elemetosStrings = {
  loader: 'loader',
  loaderBG: 'loader-bg'
}

export const loader = elemento => {
  const html = `
    <div class="${elemetosStrings.loader}">
      <img src="./img/eclipse.svg">
    </div>
  `;
  elemento.classList.add(`${elemetosStrings.loaderBG}`);
  elemento.insertAdjacentHTML('afterbegin', html);
}

export const removerLoader = elemento => {
  elemento.classList.remove(`${elemetosStrings.loaderBG}`);
  const el = document.querySelector(`.${elemetosStrings.loader}`);
  if(el)
    el.parentElement.removeChild(el);
}

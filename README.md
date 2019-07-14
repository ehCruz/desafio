# DESAFIO

### Objetivos

- [x] Consultar o endpoint /v1/public/characters
- [x] Exibir campo de busca para que o usuário digite o termo filtrando o campo nameStartsWith
- [x] Exibir os resultados da busca (resumidamente)
- [x] Ao abrir um item do resultado da busca, exibir mais informações daquele item
- [x] Quando houver uma ocorrência de thumbnail deverá ser exibida a imagem como melhor convier para a interface
- [x] Layout responsivo

### Descrição

Para o desafio proposto, utilizei os conceitos de modularização do ES6.
O projeto foi desenvolvido com javascript "vanilla", com auxilio da biblioteca "axios" para as chamadas AJAX.<br/>
Para melhor compatibilidade entre browsers e funcionalidades também fiz uso da ferramenta Babel e webpack para auxiliar na modularização
do código.

### Estrutura do Projeto

O projeto está divido em duas partes principais, o diretório "dist" contem os arquivos da **versão de produção** com o código **JS minificado**, para ver o resultado do projeto **basta abrir o arquivo "index.html" presente neste diretório**.<br/>
Já o diretório "src" contém os arquivos que são realmente editados, ou seja, é a **versão de desenvolvimento** onde está todo o código JS legível.
Há também arquivos de configuração do webpack e babel.

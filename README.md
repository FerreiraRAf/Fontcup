📌 Descrição do Projeto – Modificador de Fontes

📦 Instalação das dependências

Após baixar ou clonar o projeto, é necessário instalar as dependências antes de iniciá-lo.
Para isso, execute um dos comandos abaixo no terminal, dentro da pasta do projeto:

npm install


ou

npm i


Esse processo irá baixar todas as dependências necessárias para que o projeto funcione corretamente.

Somente após a instalação das dependências será possível iniciar o projeto e utilizar todas as funcionalidades disponíveis.

Este projeto consiste em um modificador de fontes, onde o usuário pode digitar uma frase em um campo de texto e, em seguida, selecionar uma fonte para alterar dinamicamente o estilo dessa frase exibida na tela.

A aplicação foi desenvolvida utilizando Vite + React, garantindo maior desempenho no desenvolvimento e uma estrutura moderna de componentes. As fontes disponíveis são armazenadas em um arquivo JSON, que funciona como uma base de dados simulada para o projeto.

Para gerenciar esses dados, foi utilizado o json-server, permitindo que o React consuma as informações das fontes como se estivesse acessando uma API real. Sempre que o usuário escolhe uma fonte, a aplicação faz a leitura desses dados e aplica o estilo correspondente ao texto digitado.

⚙️ Funcionamento do Projeto

O usuário digita uma frase no campo de input

As fontes disponíveis são carregadas a partir de um arquivo db.json

Ao selecionar uma fonte, o texto é atualizado dinamicamente com o novo estilo

O React gerencia o estado da aplicação e a renderização em tempo real

▶️ Como executar o projeto

Para que a aplicação funcione corretamente, é necessário executar dois comandos:

npm run dev


⚠️ Observação Importante

Caso os modificadores de texto (fontes) não apareçam na aplicação, é necessário iniciar o servidor JSON manualmente com o comando:

json-server --watch db.json --port 3000


Esse comando é responsável por disponibilizar as fontes armazenadas no arquivo db.json.
Sem ele, a aplicação não consegue carregar os modificadores de fonte.

Se os modificadores estiverem aparecendo normalmente, basta aproveitar o projeto, pois nenhum outro comando adicional será necessário além do npm run dev.

⚠️ Requisitos para testar o projeto

Para testar o site corretamente, é necessário ter o Node.js instalado na máquina.
O Node.js é utilizado para executar o projeto React e também para rodar o json-server, responsável por disponibilizar os modificadores de fonte armazenados no arquivo db.json.

Sem o Node.js, não será possível acessar o servidor JSON e, consequentemente, os modificadores de texto não serão carregados na aplicação.

Após instalar o Node.js, basta executar os comandos indicados para aproveitar todas as funcionalidades do projeto.

🛠️ Tecnologias Utilizadas

React

Vite

JavaScript

JSON

json-server in your project.

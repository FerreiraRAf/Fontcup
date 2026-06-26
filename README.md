# 🖋️ Fontcup

O **Fontcup** é uma aplicação web desenvolvida com **React** e **Vite** que permite visualizar e testar diferentes fontes tipográficas em tempo real. O usuário pode digitar um texto personalizado e aplicar diversas fontes para comparar estilos de forma rápida e intuitiva.

---

## 📖 Sobre o projeto

O objetivo do Fontcup é oferecer uma interface simples para visualizar como um texto fica em diferentes tipografias utilizando **Google Fonts**.

O projeto foi desenvolvido para praticar conceitos como componentização, gerenciamento de estado com React e manipulação dinâmica de estilos.

---

## 🚀 Tecnologias utilizadas

* ⚛️ React 19
* ⚡ Vite
* 🎨 Material UI
* 🎯 JavaScript (ES6+)
* 🔤 Google Fonts
* 💅 CSS3

---

## ✨ Funcionalidades

* Digitar um texto personalizado.
* Visualizar diferentes fontes tipográficas.
* Alterar a fonte em tempo real.
* Interface simples e responsiva.
* Componentização utilizando React.

---

## 📂 Estrutura do projeto

```text
src/
│
├── Components/
│   └── Fonts.jsx
│
├── assets/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 🏗️ Arquitetura

A aplicação utiliza uma arquitetura baseada em componentes.

```text
Usuário
    │
    ▼
Digita um texto
    │
    ▼
React atualiza o estado
    │
    ▼
Seleciona uma fonte
    │
    ▼
A fonte é aplicada dinamicamente
    │
    ▼
Texto renderizado
```

---

## 🧩 Componentes

### App.jsx

Responsável pelo gerenciamento do estado da aplicação, seleção da fonte e renderização da interface principal.

### Fonts.jsx

Responsável por exibir as opções de fontes e permitir que o usuário selecione a tipografia desejada.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para praticar conceitos importantes do ecossistema React, como:

* Componentização
* Gerenciamento de estado com `useState`
* Renderização dinâmica
* Manipulação de estilos
* Organização de componentes
* Integração com Google Fonts

---

## ⚙️ Como executar

```bash
# Clonar o repositório
git clone https://github.com/FerreiraRAf/Fontcup.git

# Entrar na pasta
cd Fontcup

# Instalar dependências
npm install

# Executar o projeto
npm run dev
```

---

## 📸 Demonstração

> Adicione aqui um GIF ou capturas de tela da aplicação em funcionamento.

---

## 📈 Melhorias futuras

* Buscar fontes dinamicamente por meio da API do Google Fonts.
* Implementar sistema de pesquisa de fontes.
* Permitir alterar tamanho, peso e estilo da fonte.
* Adicionar modo escuro.
* Favoritar fontes.
* Copiar automaticamente o CSS da fonte selecionada.
* Organizar a aplicação em camadas (`components`, `hooks`, `services`, `assets`).

---

## 👨‍💻 Autor

**Rafael Ferreira**

* GitHub: https://github.com/FerreiraRAf
* LinkedIn: https://www.linkedin.com/in/rafael-ferreira-21131539b/

# TDW_M2

Este é um projeto de exemplo criado com **React** e estilizado com **Tailwind CSS**. Este README orienta sobre como criar um novo projeto React, instalar o Tailwind CSS e configurar o ambiente para começar a desenvolver.

---

## 📦 Requisitos

Antes de começar, você precisará dos seguintes itens instalados no seu sistema:

- **Node.js**: [Baixe aqui](https://nodejs.org/) (Recomendado LTS)
- **npm** (ou **yarn**): O npm vem com o Node.js, então ao instalar o Node.js, você também terá o npm. Caso prefira usar o yarn, [instale-o aqui](https://yarnpkg.com/getting-started/install).

---

## 🚀 Instruções

Siga os passos abaixo para criar o seu projeto React e configurar o Tailwind CSS.

### Passo 1: Criar o projeto React

1. Abra o terminal ou prompt de comando.
2. Crie o projeto React com o comando:

```bash
npx create-react-app my-project
```

Substitua `my-project` pelo nome do seu projeto.

3. Entre no diretório do projeto:

```bash
cd my-project
```

### Passo 2: Instalar o Tailwind CSS

Agora, vamos adicionar o Tailwind CSS ao seu projeto.

1. **Instale as dependências necessárias**:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. **Inicie o Tailwind CSS**:

```bash
npx tailwindcss init
```

Isso criará um arquivo `tailwind.config.js` na raiz do seu projeto.

### Passo 3: Configuração do Tailwind CSS

Agora, vamos configurar o Tailwind CSS para o seu projeto.

1. **Abra o arquivo `tailwind.config.js` e edite-o para configurar os caminhos para os arquivos do React**:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. **Configure o Tailwind no seu arquivo CSS**:

Abra o arquivo `src/index.css` e substitua seu conteúdo por:

```css
/* src/index.css */

/* Adicione o seguinte para o Tailwind CSS funcionar corretamente */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Adicione seus estilos personalizados abaixo (opcional) */
```

Isso garante que o Tailwind CSS esteja sendo aplicado corretamente.

### Passo 4: Começar a usar Tailwind CSS

Agora que o Tailwind CSS está configurado, você pode começar a usar as classes utilitárias do Tailwind diretamente no seu código JSX.

Exemplo:

Abra o arquivo `src/App.js` e substitua o conteúdo por:

```jsx
import React from "react";
import "./index.css"; // Importando o arquivo CSS do Tailwind

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold text-indigo-600">Bem-vindo ao meu projeto React com Tailwind!</h1>
    </div>
  );
}

export default App;
```

Agora, seu projeto React está com o Tailwind CSS pronto para ser usado!

### Passo 5: Rodar o projeto

1. Para rodar o projeto e ver as mudanças em tempo real, use o comando:

```bash
npm start
```

Isso abrirá o seu navegador na URL `http://localhost:3000/` com o aplicativo React rodando.

---

## 🔧 Scripts disponíveis

Durante o desenvolvimento, você pode usar os seguintes scripts:

- `npm start`: Inicia o servidor de desenvolvimento (geralmente em `http://localhost:3000/`).
- `npm run build`: Cria uma versão otimizada e compactada para produção.
- `npm test`: Executa os testes configurados no projeto.
- `npm run eject`: Expõe as configurações do Create React App para você modificar.

---

## 📚 Recursos úteis

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [PostCSS](https://postcss.org/)


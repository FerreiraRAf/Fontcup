import { useState } from 'react';
import Font from '/logo.png';
import './App.css';
import TextField from '@mui/material/TextField';
import FontExample from './Components/Fonts'; // Mantendo seu componente de estilo

// Dados das fontes diretamente no código (sem db.json)
const fonts = [
  { name: "Roboto", url: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
  { name: "Cinzel", url: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" },
  { name: "Lobster", url: "https://fonts.googleapis.com/css2?family=Lobster&display=swap" },
  { name: "Cherry Bomb One", url: "https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" },
  { name: "Caveat", url: "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" },
];

function App() {
  const [selectedFont, setSelectedFont] = useState(null);

  // Carrega os links das fontes dinamicamente
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = font.url;
    document.head.appendChild(link);
  });

  return (
    <>
      <div>
        <a href="https://github.com/FerreiraRAf" target="_blank">
          <img src={Font} className="logo" alt="Vite logo" />
        </a>
      </div>

      <TextField 
        id="standard-basic" 
        label="Escreva" 
        variant="standard" 
        className="input"
        InputProps={{
          style: { fontFamily: selectedFont ? selectedFont.name : 'inherit' }
        }}
      />

      <h1 id="Fonts">Fontes disponíveis</h1>

      {/* Mantém o mesmo estilo usando FontExample */}
      {fonts.map((font) => (
        <FontExample 
          key={font.name} 
          font={font} 
          onSelect={setSelectedFont} 
          isSelected={selectedFont?.name === font.name}
        />
      ))}
    </>
  );
}

export default App;
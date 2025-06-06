import { useState, useEffect } from 'react';
import Font from '/logo.png';
import './App.css';
import TextField from '@mui/material/TextField';
import FontExample from './Components/Fonts';

function App() {
  const [fonts, setFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState(null);

  useEffect(() => {
    async function fetchFonts() {
      const response = await fetch('http://localhost:3000/fonts'); // URL atualizada aqui
      const data = await response.json();
      setFonts(data);
    }

    fetchFonts();
  }, []);

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

      {fonts.map((font) => (
        <FontExample key={font.name} font={font} onSelect={setSelectedFont} />
      ))}
    </>
  );
}

export default App;

import "./App.css";
import freeCodeCampLogo from "./imagenes/loginn.png";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecode-logo-contenedor">
        <img
          className="freecode-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contador-botones">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

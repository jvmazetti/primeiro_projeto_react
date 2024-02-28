import { useState } from "react";
import Perfil from "./components/Perfil/index";
import ResposList from "./components/ReposList/index";

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ResposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </> 
  )
}

export default App

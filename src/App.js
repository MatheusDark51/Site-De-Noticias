import Rotas from "./Services";
import {BrowserRouter} from "react-router-dom"
import Header from "./Components/Header"
import BottonBar from "./Components/BottonBar";

import Contexto from "./Context";

function App() {
  return (
    <Contexto>
      
      <Header/>

        <BrowserRouter>
          <Rotas/>
        </BrowserRouter>

      <BottonBar/>

    </Contexto>
    
  );
}

export default App;

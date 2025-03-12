
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Componente from "./componente";
import Header from "./header";
import Productos from "./products";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
      <Route path="/" element = {<Productos />}></Route>
        <Route path="/productos" element = {<Productos />}></Route>
        <Route path="/componente/:id" element={<Componente />}></Route>
          
        
      </Routes>
    </>
  );
}

export default App;

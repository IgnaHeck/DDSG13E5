// Imports
import './App.css';
import MenuComponent from './components/MenuComponent/MenuComponent';
import CrearViajeComponent from './components/CrearViajeComponent/CrearViajeComponent';
import ModificarViajeComponent from './components/ModificarViajeComponent/ModificarViajeComponent';
import EliminarViajeComponent from './components/EliminarViajeComponent/EliminarViajeComponent';
import EliminarPasajeroComponent from './components/EliminarPasajeroComponent/EliminarPasajeroComponent'
import VerViajeComponent from './components/VerViajeComponent/VerViajeComponent';
import ListaDeViajesComponent from './components/ListaDeViajesComponent/ListaDeViajesComponent'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

function App() {
  // JS Code

  return (
    // JSX Code
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/" element={<MenuComponent/>}/>
          <Route path="/eliminar-pasajero" element={<EliminarPasajeroComponent/>}/>
          <Route path="/eliminar-viaje" element={<EliminarViajeComponent/>}/>
          <Route path="/crear-viaje" element={<CrearViajeComponent/>}/>
          <Route path="/modificar-viaje/:id" element={<ModificarViajeComponent/>}/>
          <Route path="/ver-viaje/:id" element={<VerViajeComponent/>}/>
          <Route path="/viajes" element={<ListaDeViajesComponent/>}/>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

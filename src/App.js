// Imports
import './App.css';
import MenuComponent from './components/MenuComponent/MenuComponent';
import EliminarPasajeroComponent from './components/EliminarPasajeroComponent/EliminarPasajeroComponent'
import EliminarViajeComponent from './components/EliminarViajeComponent/EliminarViajeComponent';
import ModificarViajeComponent from './components/ModificarViajeComponent/ModificarViajeComponent';
import VerViajeComponent from './components/VerViajeComponent/VerViajeComponent';
import ListaDeViajesComponent from './components/ListaDeViajesComponent/ListaDeViajesComponent'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // JS Code

  return (
    // JSX Code
    <ChakraProvider>
      <div className="App">
        <MenuComponent/>
        <EliminarPasajeroComponent></EliminarPasajeroComponent>
        <EliminarViajeComponent></EliminarViajeComponent>
        <ModificarViajeComponent></ModificarViajeComponent>
        <VerViajeComponent></VerViajeComponent>
        <ListaDeViajesComponent></ListaDeViajesComponent>
      </div>
    </ChakraProvider>
  );
}

export default App;

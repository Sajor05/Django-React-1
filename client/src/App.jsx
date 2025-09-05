import { Header } from "./components/Header/Header";
import { Postulacion } from "./components/Main/Postulacion/Postulacion";
import { Sabores_Actuales } from "./components/Main/Nuevos_sabores/Sabores";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Sabores_Actuales></Sabores_Actuales>
        <Postulacion></Postulacion>
        <h1>Hola mundo</h1>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

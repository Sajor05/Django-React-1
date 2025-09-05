import { Header } from "./components/Header/Header";
import { Postulacion } from "./components/Main/Postulacion/Postulacion";
import { Sabores_Actuales } from "./components/Main/Nuevos_sabores/Sabores";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main className="px-5">
        <div className="px-5">
          <Sabores_Actuales></Sabores_Actuales>
          <Postulacion></Postulacion>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Section } from "./components/Section/Section";
/*
Con la libreria rect-router-dom tenemos funciones que nos permiten generar path´s para acceder a otros componentes

Navigate nos dice que si no se pone ningun path por defecto se abre tasks
*/

function App() {
  return (
    <>
      <Header title="Este es el title del header">
        <h1>Esto es el children header</h1>
      </Header>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}

export default App;

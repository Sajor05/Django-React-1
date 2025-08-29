import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPages";
import { TasksFormPage } from "./pages/TasksFormPages";
import { Navigation } from "./components/Navigation";

/*
Con la libreria rect-router-dom tenemos funciones que nos permiten generar path´s para acceder a otros componentes

Navigate nos dice que si no se pone ningun path por defecto se abre tasks
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks"></Navigate>}></Route>
          <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
          <Route
            path="/tasks-create"
            element={<TasksFormPage></TasksFormPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

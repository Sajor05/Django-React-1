import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <Link to="/tasks">Task Page</Link>
      <h1>Task App</h1>
      <Link to="/tasks-create">Crea una tarea</Link>
    </>
  );
}

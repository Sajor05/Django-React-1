import "./Section.css";
const frutas = ["manzana", "pera", "naranja"];
const users = [
  {
    id: 1,
    nombre: "Fabrizio",
    description: "Full-stack developer",
  },
];

export function Section() {
  return (
    <>
      <div className="lista-de-frutas">
        <ul>
          {frutas.map((fruta) => (
            <li>{fruta}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

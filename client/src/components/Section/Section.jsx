const frutas = ["manzana", "pera", "naranja"];

export function Section() {
  return (
    <>
      <ul>
        {frutas.map((fruta) => (
          <li>{fruta}</li>
        ))}
      </ul>
    </>
  );
}

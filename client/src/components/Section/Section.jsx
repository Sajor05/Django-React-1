const frutas = ["manzana", "pera", "naranja"];

export function Section() {
  return (
    <>
      <ul>
        {frutas.map((fruta) => {
          return <li>{fruta}</li>;
        })}
      </ul>
    </>
  );
}

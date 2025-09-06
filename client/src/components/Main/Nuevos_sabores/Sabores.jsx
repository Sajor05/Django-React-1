import "./Nuevos_sabores.css";
import Sabores from "../../../assets/Home/nuevos_sabores.jpg";

export function Sabores_Actuales() {
  return (
    <>
      <section className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src={Sabores}
              alt="Nuevos sabores"
              className="shadow-lg md:w-full"
            />
          </div>
          <div className="font-bold text-2xl md:text-4xl">
            <h1 className="fw-bold">
              EXPERIMENTA EL <br /> SABOR
            </h1>
            <br />
            <h3 className="fw-bold fst-italic">DE UN NUEVO CLÁSICO</h3>
          </div>
        </div>
      </section>
    </>
  );
}

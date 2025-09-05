import "./Nuevos_sabores.css";
import Sabores from "../../../assets/Home/nuevos_sabores.jpg";

export function Sabores_Actuales() {
  return (
    <>
      <section className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <img src={Sabores} alt="Nuevos sabores" className="shadow-lg" />
          </div>
          <div className="col p-5 mt-5">
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

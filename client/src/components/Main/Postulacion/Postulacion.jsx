import Trabaja_con_nosotros from "../../../assets/Home/trabaja_con_nosotros.png";
import "./Postulacion.css";

export function Postulacion() {
  return (
    <>
      <section className="postulate mt-5 text-center">
        <div className="row">
          <div className="col p-5 mt-5">
            <h2 className="fw-bold">
              Unite a algo más <br /> grande
            </h2>
            <h5 className="mt-4 fst-italic">
              Revisa las oportunidades que tenemos para vos
            </h5>
            <div className="postular mt-4">
              <a className="fw-bold" href="#">
                Postular acá
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={Trabaja_con_nosotros} alt="Trabaja con nosotros" />
          </div>
        </div>
      </section>
    </>
  );
}

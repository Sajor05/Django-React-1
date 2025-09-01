import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="mt-5">
        <div className="container-fluid">
          <div className="container text-center">
            <div className="row mt-3 p-5">
              <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
                <h6>Sobre nosotros</h6>
                <div className="links">
                  <a className="d-block" href="#">
                    Nuestra historia
                  </a>
                  <a className="d-block" href="#">
                    Nuestra misión
                  </a>
                  <a className="d-block" href="#">
                    Sucursales
                  </a>
                  <a className="d-block" href="#">
                    Café
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
                <h6>Impacto social</h6>
                <div className="links">
                  <a className="d-block" href="#">
                    Nuestra historia
                  </a>
                  <a className="d-block" href="#">
                    Nuestra misión
                  </a>
                  <a className="d-block" href="#">
                    Sucursales
                  </a>
                  <a className="d-block" href="#">
                    Café
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
                <h6>Atención al cliente</h6>
                <div className="links">
                  <a className="d-block" href="#">
                    Nuestra historia
                  </a>
                  <a className="d-block" href="#">
                    Nuestra misión
                  </a>
                  <a className="d-block" href="#">
                    Sucursales
                  </a>
                  <a className="d-block" href="#">
                    Café
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
                <h6>Experiencia Starboocks</h6>
                <div className="links">
                  <a className="d-block" href="#">
                    Nuestra historia
                  </a>
                  <a className="d-block" href="#">
                    Nuestra misión
                  </a>
                  <a className="d-block" href="#">
                    Sucursales
                  </a>
                  <a className="d-block" href="#">
                    Café
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom container text-center p-5 d-flex justify-content-center">
            <ul>
              <li>
                <a href="#" className="icono">
                  <i className="fab fa-facebook-f icon"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icono">
                  <i className="fab fa-twitter icon"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icono">
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icono">
                  <i className="fab fa-google-plus-g icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p>© Derechos reservados | Fabrizio Rojas</p>
        </div>
      </footer>
    </>
  );
}

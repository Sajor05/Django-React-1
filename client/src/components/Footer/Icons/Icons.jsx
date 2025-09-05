import "./Icons.css";

export function Icons() {
  return (
    <>
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
    </>
  );
}

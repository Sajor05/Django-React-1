import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-1">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="../../assets/logo.svg" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item fw-bold">
                  <a className="nav-link active" aria-current="page" href="#">
                    MENÚ
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a className="nav-link active" href="/pages/cafe.html">
                    CAFÉ
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/pages/experiencia.html"
                  >
                    EXPERIENCIA STARBOOKS
                  </a>
                </li>
              </ul>

              <a
                className="nav-link active fw-bold"
                aria-current="page"
                href="/pages/localizar.html"
              >
                <i className="fa-solid fa-location-dot"></i> LOCALIZAR LOCAL
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

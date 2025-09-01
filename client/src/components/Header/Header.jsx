import "./Header.css";
export function Header({ children, title }) {
  return (
    <>
      <header className="Header">
        <h1 className="Header-title">{title}</h1>
        {children}
      </header>
    </>
  );
}

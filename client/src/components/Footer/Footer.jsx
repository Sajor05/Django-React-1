import "./Footer.css";
import { Icons } from "./Icons/Icons";
import { Links } from "./Links/Links";
import { Copyright } from "./Copyright/Copyright";

//mt-<number> tailwind
export function Footer() {
  return (
    <>
      <footer className="mt-5">
        <div className="container-fluid">
          <Links></Links>
          <Icons></Icons>
        </div>
        <Copyright></Copyright>
      </footer>
    </>
  );
}

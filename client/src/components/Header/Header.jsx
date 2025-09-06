import "./Header.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <>
      <header>
        <nav className="relative bg-gray-200">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  command="--toggle"
                  commandfor="mobile-menu"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-[#1B780D] focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img src={logo} alt="Your Company" className="h-8 w-auto" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-white/5 hover:text-[#1B780D]"
                    >
                      Café
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-white/5 hover:text-[#1B780D]"
                    >
                      Experiencia Starbucks
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-white/5 hover:text-[#1B780D]"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="font-black relative rounded-full p-1 text-black focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>

          <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                aria-current="page"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-[#1B780D]"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-white/5 hover:text-[#1B780D]"
              >
                Team
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-white/5 hover:text-[#1B780D]"
              >
                Projects
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-white/5 hover:text-[#1B780D]"
              >
                Calendar
              </a>
            </div>
          </el-disclosure>
        </nav>
      </header>
    </>
  );
}

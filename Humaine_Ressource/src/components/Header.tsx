import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-xl bg-white p-5">
      <div className="container flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="./src/assets/Logo.png" className="w-20" alt="Logo" />
          </Link>
        </div>
        <div className="flex justify-between basis-[80%] font-bold">
          <ul className="flex gap-8 items-center justify-between basis-[70%]">
            <li>
              <Link
                to="/"
                className="hover:text-buttonColor transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-buttonColor transition-all duration-300 ease-in-out"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-buttonColor transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-buttonColor transition-all duration-300 ease-in-out"
              >
                About Us
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="/login"
                className="bg-buttonColor px-5 py-2 rounded-3xl cursor-pointer hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out border-4 border-buttonColor text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

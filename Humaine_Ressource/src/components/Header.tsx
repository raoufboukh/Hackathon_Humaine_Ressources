const Header = () => {
  return (
    <header className=" shadow-xl bg-white">
      <div className="container flex justify-between items-center">
        <div>
          <img src="./src/assets/Logo.svg" className="w-20" alt="" />
        </div>
        <div className="flex justify-between basis-[80%]  font-bold">
          <ul className="flex gap-8 items-center justify-between basis-[70%]">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li className="bg-buttonColor px-5 py-2 rounded-3xl cursor-pointer hover:bg-transparent hover:text-black  transition-all duration-300 border-4 border-buttonColor text-white">
              Login
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Header = () => {
  return (
    <header className="pt-1 shadow-xl bg-white">
      <div className="container flex justify-between items-center">
        <div>
          <img src="./src/assets/Logo.svg" className="w-20" alt="" />
        </div>
        <div className="flex justify-between basis-[70%]  font-bold">
          <ul className="flex gap-8 items-center">
            <li>Home</li>
            <li>Services</li>
            <li>Ressources</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li className="bg-buttonColor px-5 py-2 rounded-3xl text-white">
              Login
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

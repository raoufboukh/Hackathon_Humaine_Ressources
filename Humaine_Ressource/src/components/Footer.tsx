const Footer = () => {
  return (
    <footer className="bg-buttonColor text-white pt-10">
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
        <div>
          <h3 className="text-2xl font-bold">Features</h3>
          <ul className="py-3 flex flex-col gap-3">
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Employee Management
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Attendance Tracking
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              HR Analytics
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Payment Files
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Accountant Reports
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Company</h3>
          <ul className="py-3 flex flex-col gap-3">
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              About Us
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Careers
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Social Media
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Support</h3>
          <ul className="py-3 flex flex-col gap-3">
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Contact Us
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              FAQ's
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              MeliAI ChatBot
            </li>
            <li className="hover:translate-x-1 transition-all duration-300 cursor-pointer w-fit">
              Blogs / Insights
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <img
          src="./src/assets/Footer.svg"
          className="w-96 mx-auto -mb-10"
          alt=""
        />
        <p className=" text-white py-5">
          &copy; 2024 MelinIQ HR Corporation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

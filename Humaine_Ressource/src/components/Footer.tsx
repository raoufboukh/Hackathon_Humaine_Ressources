import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-buttonColor text-white pt-10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Features Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Features</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/employee-managment">Employee Management</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/attendance-tracking">Attendance Tracking</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/hr-analytics">HR Analytics</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/payment-files">Payment Files</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/acountant-reports">Accountant Reports</Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/carrers">Careers</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/social-media">Social Media</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Support</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/faqs">FAQ's</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/meliAI-chatbot">MeliAI ChatBot</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              <Link to="/blogs">Blogs / Insights</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-10">
        <img
          src="./src/assets/white-Logo.png"
          className="w-48 mx-auto mb-5"
          alt="MelinIQ Logo"
        />
        <p className="text-sm text-gray-300">
          &copy; 2024 MelinIQ HR Corporation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

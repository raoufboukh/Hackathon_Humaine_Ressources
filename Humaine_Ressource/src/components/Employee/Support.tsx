import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function Support() {
  return (
    <section className="flex  min-h-screen">
      {/* Sidebar */}
      <Dashboard />

      {/* Main Content */}
      <div className="flex-1 flex  justify-center">
        <div className=" container py-10">
          <h1 className="font-black text-3xl mb-10 ">Support</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {/* Links */}
            <Link
              to="/doc/contact-admin"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">
                Contact your Admin
              </span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
            <Link
              to="/doc/faqs"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">FAQ’s</span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
            <Link
              to="/doc/melinai-bot"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">MelinAI Bot</span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
            <Link
              to="/doc/system-status"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">
                System Status and Updates
              </span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;

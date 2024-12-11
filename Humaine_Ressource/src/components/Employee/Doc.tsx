import { FaArrowRight } from "react-icons/fa";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Doc() {
  return (
    <section className="flex bg-lightPurple min-h-screen">
      {/* Sidebar */}
      <Dashboard />

      {/* Main Content */}
      <div className="container flex-1 p-10">
        <div className=" flex justify-between items-center">
          {/* Page Header */}
          <h1 className="font-black text-4xl text-darkText">Documents</h1>
          <div className="relative">
            {/* Notification Bell */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
            <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
          </div>
        </div>

        {/* Document List */}
        <div className="mt-10 space-y-4">
          <Link
            to="/doc/payment-file"
            className="flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <span className="font-bold">Payment Document Request</span>
            <FaArrowRight className="text-buttonColor" />
          </Link>

          <Link
            to="/doc/payment-file"
            className="flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <span className="font-bold">Older Payment Documents</span>
            <FaArrowRight className="text-buttonColor" />
          </Link>

          <Link
            to="/doc/leave-justification"
            className=" flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all "
          >
            <span className="font-bold">employment contracts</span>
            <FaArrowRight className="text-buttonColor" />
          </Link>

          <Link
            to="/doc/leave-justification"
            className=" flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all "
          >
            <span className="font-bold">bonuses, allowances</span>
            <FaArrowRight className="text-buttonColor" />
          </Link>

          <Link
            to="/doc/leave-justification"
            className=" flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all "
          >
            <span className="font-bold">Legal Documents</span>
            <FaArrowRight className="text-buttonColor" />
          </Link>
        </div>
      </div>
    </section>
  );
}

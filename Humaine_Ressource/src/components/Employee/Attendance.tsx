import { IoIosNotificationsOutline } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
// import { PiWarningOctagon } from "react-icons/pi";

const Vacation = () => {
  return (
    <section className="flex h-[100] m-0">
      <div className="h-[100%]">
        <Dashboard />
      </div>
      <div className="basis-[78%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Attendance</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>

        <div className="mt-20">
          <Link
            to="/doc/leave-justification"
            className=" flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all "
          >
            <span className="font-bold">Attendance and Absence History</span>
            <FaArrowRight className="text-buttonColor" />
          </Link>
        </div>
        <div className="mt-10">
          <Link
            to="/doc/leave-justification"
            className=" flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all "
          >
            <span className="font-bold">
              Recurring Absences or Critical Periods for the Team.
            </span>
            <FaArrowRight className="text-buttonColor" />
          </Link>
        </div>

        <div className="bg-white rounded-xl basis-[30%] p-3 shadow-lg mt-10">
          <h2 className="text-lg font-bold">Attendance Balance</h2>
          <div className="flex justify-between pt-2">
            <p>Checked-in Balance</p>
            <p className="text-green-500">28/40</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="py-2">Absence Balence</p>
            <p className="text-red-500">10/40</p>
          </div>
        </div>

        <div className="basis-[50%]">
          <div className="cursor-pointer mt-10 flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all ">
            <p className="font-bold">Request an Absence</p>
            <FaArrowRight className="text-buttonColor" />
          </div>
          <div className="cursor-pointer mt-5 flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all ">
            <p className="font-bold">justify an absence</p>
            <FaArrowRight className="text-buttonColor" />
          </div>
        </div>

        <div className="py-12 flex gap-20">
          <div className="bg-white rounded-xl basis-[30%] p-3 shadow-lg">
            <h2 className="text-lg font-bold">Vacation Balance</h2>
            <div className="flex justify-between pt-2">
              <p>Total Balance</p>
              <p className="text-green-500">7.5/30</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="py-2">Already Used</p>
              <p className="text-red-500">15/30</p>
            </div>
          </div>
          <div className="basis-[50%]">
            <div className="cursor-pointer flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all ">
              <p className="font-bold">Vacation Request</p>
              <FaArrowRight className="text-buttonColor" />
            </div>
            <div className="cursor-pointer mt-5 flex items-center justify-between bg-white text-darkText px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all ">
              <p className="font-bold">Illness Vacation</p>
              <FaArrowRight className="text-buttonColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacation;

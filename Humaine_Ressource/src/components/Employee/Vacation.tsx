import { IoIosNotificationsOutline } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";
import Dashboard from "./Dashboard";
// import { PiWarningOctagon } from "react-icons/pi";

const Vacation = () => {
  return (
    <section className="flex">
      <Dashboard />
      <div className="basis-[78%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Vacations</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
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
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-lg">
              <p>Vacation Request</p>
              <FaArrowRight className="text-buttonColor" />
            </div>
            <div className="flex items-center justify-between bg-white mt-10 p-3 rounded-lg shadow-lg">
              <p>Illness Vacation</p>
              <FaArrowRight className="text-buttonColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacation;

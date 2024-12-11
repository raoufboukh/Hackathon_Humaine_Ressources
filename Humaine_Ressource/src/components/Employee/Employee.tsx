import { IoIosNotificationsOutline } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";
import { PiWarningOctagon } from "react-icons/pi";
import Dashboard from "./Dashboard";
const Employee = () => {
  return (
    <section className="flex">
      <Dashboard />
      <div className="basis-[78%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Hello Marie Dupont!</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>
        <div className="grid justify-start grid-cols-2 gap-4 py-10">
          <div className="bg-white rounded-xl basis-[30%] p-3">
            <h2 className="text-lg font-bold">Performance</h2>
            <div className="flex justify-between items-center py-2">
              <p>Objective</p>
              <p>75%</p>
            </div>
            <div
              className="w-full h-1"
              style={{
                backgroundImage: "linear-gradient(90deg,#3F48CC 75%,white 75%)",
              }}
            ></div>
          </div>
          <div className="bg-white rounded-xl basis-[30%] p-3">
            <h2 className="text-lg font-bold">Payroll / Benifits</h2>
            <div className="flex justify-between">
              <p>Last Salary</p>
              <p className="text-green-500">2000$</p>
            </div>
            <div className="flex justify-between">
              <p>Month</p>
              <p>Nov. 24</p>
            </div>
          </div>
        </div>
        <div className="grid justify-start grid-cols-2 gap-4 py-5">
          <div className="bg-white rounded-xl basis-[32%] p-5">
            <h2 className="text-lg font-bold">Attendance</h2>
            <div className="flex justify-between items-center border-t border-gray-200 py-2">
              <p className="font-semibold">Attendance Hours</p>
              <p className="text-buttonColor">38/40h</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 py-2">
              <p className="font-semibold">Leave Hours</p>
              <p className="text-red-600">2/40h</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 py-2">
              <p className="font-semibold">Week</p>
              <p className="">39/52wk</p>
            </div>
          </div>
          <div className="bg-white rounded-xl basis-[32%] p-3">
            <h2 className="text-lg font-bold">Upcoming Training</h2>
            <div className="border-t border-gray-300 py-1 flex justify-between cursor-pointer">
              <div className="flex flex-col justify-center">
                <p className=" font-semibold">Leadership Agile</p>
                <p className="">20Jan. 2025 / 2 days </p>
              </div>
              <FaArrowRight className="text-buttonColor flex items-center h-[unset] " />
            </div>
            <div className="border-t border-gray-300 py-1 flex justify-between cursor-pointer">
              <div className="flex flex-col justify-center">
                <p className=" font-semibold">Analytics Tools</p>
                <p className="">20Jan. 2025 / 2 days </p>
              </div>
              <FaArrowRight className="text-buttonColor flex items-center h-[unset] " />
            </div>
          </div>
        </div>
        <div className="bg-red-300 border border-red-600 w-full rounded-2xl flex gap-2 px-3 py-1 items-center">
          <PiWarningOctagon className="text-red-600 text-xl" />
          <p className="text-red-600 p-2">
            Every Left Hour that is not justified is Going to take of a part of
            your Salary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employee;

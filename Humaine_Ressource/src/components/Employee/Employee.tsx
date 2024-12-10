import { FaUser } from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { IoDocumentTextSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { RiBarChartFill } from "react-icons/ri";
import { LuMessageCircle } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { PiWarningOctagon } from "react-icons/pi";
const Employee = () => {
  return (
    <section className="flex">
      <div className="bg-buttonColor basis-[22%] container py-10 text-white h-screen">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center">
            <FaUser className="w-7 h-7" />
          </div>
          <div className="">
            <h2 className="font-bold text-lg">Marie Dupont</h2>
            <p className="">Employee</p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <ul className="pt-10">
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <CgHome /> Dashboard
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <IoDocumentTextSharp /> Document
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <CiCalendar /> Vacation
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <RiBarChartFill /> Performance
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <LuMessageCircle /> Support
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <FaUser /> Profile
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <MdOutlineSettings /> Settings
            </li>
          </ul>
          <ul className="">
            <li className="flex gap-3 items-center cursor-pointer text-[20px]">
              <IoLogOut /> Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="basis-[78%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Hello Marie Dupont!</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>
        <div className="flex justify-center px-20 gap-24 py-10">
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
        <div className="flex justify-center px-20 gap-24 py-10">
          <div className="bg-white rounded-xl basis-[32%] p-3">
            <h2 className="text-lg font-bold">Attendance</h2>
            <div className="flex justify-between items-center border-t border-gray-200">
              <p className="py-1 font-semibold">
                Attendance <br /> Hours
              </p>
              <p className="text-buttonColor">38/40h</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200">
              <p className="py-1 font-semibold">Leave Hours</p>
              <p className="text-red-600">2/40h</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200">
              <p className="py-1 font-semibold">Week</p>
              <p className="">39/52wk</p>
            </div>
          </div>
          <div className="bg-white rounded-xl basis-[32%] p-3">
            <h2 className="text-lg font-bold">Upcoming Training</h2>
            <div className="border-t border-gray-300 py-1">
              <p className=" font-semibold">Leadership Agile</p>
              <p className="flex gap-4 items-center">
                20Jan. 2025 / 2 days{" "}
                <FaArrowRight className="text-buttonColor" />{" "}
              </p>
            </div>
            <div className="border-t border-gray-300 py-1">
              <p className=" font-semibold">Analytics Tools</p>
              <p className="flex gap-3 items-center">
                20Jan. 2025 / 2 days{" "}
                <FaArrowRight className="text-buttonColor" />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-300 border border-red-600 w-full rounded-2xl flex gap-2 px-3 py-1 items-center">
          <PiWarningOctagon className="text-red-600 text-xl" />
          <p className="text-red-600">
            Every Left Hour is Going to take of a part of your Salary
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employee;

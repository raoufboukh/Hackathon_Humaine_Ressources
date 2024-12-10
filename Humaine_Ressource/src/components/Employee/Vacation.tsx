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
// import { PiWarningOctagon } from "react-icons/pi";

const Vacation = () => {
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

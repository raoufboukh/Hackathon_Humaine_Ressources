import { FaUser } from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { IoDocumentTextSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { RiBarChartFill } from "react-icons/ri";
import { LuMessageCircle } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
const Employee = () => {
  return (
    <section className="flex">
      <div className="bg-buttonColor basis-[25%] container py-10 text-white h-screen">
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
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <CgHome /> Dashboard
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <IoDocumentTextSharp /> Document
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <CiCalendar /> Vacation
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <RiBarChartFill /> Performance
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <LuMessageCircle /> Support
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <FaUser /> Profile
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[22px]">
              <MdOutlineSettings /> Settings
            </li>
          </ul>
          <ul className="">
            <li className="flex gap-3 items-center cursor-pointer text-[22px]">
              <IoLogOut /> Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="basis-[75%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Hello Marie Dupont!</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Employee;

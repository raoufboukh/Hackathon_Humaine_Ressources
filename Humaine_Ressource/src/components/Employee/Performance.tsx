import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";

const Performance = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <div className="bg-buttonColor basis-[22%] container py-10 text-white h-screen">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center">
            <FaUser className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Marie Dupont</h2>
            <p>Employee</p>
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
          <ul>
            <li className="flex gap-3 items-center cursor-pointer text-[20px]">
              <IoLogOut /> Logout
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="basis-[78%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Performance</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>
        <div className="flex flex-wrap justify-center px-10 gap-10 py-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 flex-grow max-w-[400px]">
            <h2 className="text-xl font-bold mb-4 leading-7">
              Performance Statics
            </h2>
            <div className="flex justify-between mb-3">
              <p>Hour of Works</p>
              <p className="text-green-500">7.5/30</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Completed Goals</p>
              <p className="text-green-500">7/10</p>
            </div>
            <div className="flex justify-between">
              <p>Trainings Completed</p>
              <p className="text-green-500">3/4</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 flex-grow max-w-[400px]">
            <h2 className="text-xl font-bold mb-4 leading-7">Rewards</h2>
            <div className="flex justify-between mb-3">
              <p>Before time tasks finished</p>
              <p className="text-green-500">2</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Money Rewarded</p>
              <p className="text-green-500">1000$</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-buttonColor text-white hover:bg-transparent hover:text-black transition-all duration-300 border-4 border-buttonColor px-3 py-1 text-sm rounded-lg ml-auto">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;

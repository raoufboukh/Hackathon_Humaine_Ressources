import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import Dashboard from "./Dashboard";

const Performance = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <Dashboard />
      {/* Main Content */}
      <div className="basis-[78%] container py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Performance</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>
        <div className="flex flex-wrap   my-20  ">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 flex-grow max-w-[400px] mr-10">
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

import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="dashboard max-w-[100vw]">
      <div className="bg-buttonColor basis-[22%] container py-10 text-white h-screen ml-0 ">
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
            {[
              { icon: <CgHome />, label: "Dashboard" },
              { icon: <IoDocumentTextSharp />, label: "Document" },
              { icon: <CiCalendar />, label: "Vacation" },
              { icon: <RiBarChartFill />, label: "Performance" },
              { icon: <LuMessageCircle />, label: "Support" },
              { icon: <FaUser />, label: "Profile" },
              { icon: <MdOutlineSettings />, label: "Settings" },
            ].map((item, index) => (
              <li
                key={index}
                className="py-3 px-2 flex gap-3 items-center cursor-pointer text-[20px] hover:bg-white hover:text-buttonColor transition-all duration-300 w-full rounded-md"
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
          <ul className="">
            <li className="py-3 px-2 flex gap-3 items-center cursor-pointer text-[20px] hover:bg-white hover:text-buttonColor transition-all duration-300 w-full rounded-md">
              <IoLogOut /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

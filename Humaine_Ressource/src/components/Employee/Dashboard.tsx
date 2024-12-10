import { Link } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="dashboard max-w-[100vw] h-screen ">
      <div className="bg-buttonColor basis-[22%] container py-10 text-white h-full ml-0 ">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center">
            <FaUser className="w-7 h-7 text-buttonColor" />
          </div>
          <div className="">
            <h2 className="font-bold text-lg">Marie Dupont</h2>
            <p className="">Employee</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="pt-10">
            {[
              { icon: <CgHome />, label: "Dashboard", to: "/dashboard" },
              {
                icon: <IoDocumentTextSharp />,
                label: "Document",
                to: "/document",
              },
              { icon: <CiCalendar />, label: "Vacation", to: "/vacation" },
              {
                icon: <RiBarChartFill />,
                label: "Performance",
                to: "/performance",
              },
              { icon: <LuMessageCircle />, label: "Support", to: "/support" },
              { icon: <FaUser />, label: "Profile", to: "/profile" },
              {
                icon: <MdOutlineSettings />,
                label: "Settings",
                to: "/settings",
              },
            ].map((item, index) => (
              <Link to={item.to} key={index}>
                <li className="py-3 px-2 flex items-center gap-3 cursor-pointer text-[20px] hover:bg-white hover:text-buttonColor transition-all duration-300 w-full rounded-md">
                  <span className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <ul className="mt-auto">
            <Link to="/">
              <li className="py-3 px-2 flex items-center gap-3 cursor-pointer text-[20px] hover:bg-white hover:text-buttonColor transition-all duration-300 w-full rounded-md">
                <span className="flex items-center gap-2 text-red-500">
                  <IoLogOut /> Logout
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

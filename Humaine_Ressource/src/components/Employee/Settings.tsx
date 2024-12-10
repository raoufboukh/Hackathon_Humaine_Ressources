import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <section className="flex">
      <div className="bg-buttonColor basis-[20%] py-10 text-white h-screen">
        <div className="flex gap-2 items-center px-6">
          <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center">
            <FaUser className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Marie Dupont</h2>
            <p>Employee</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[calc(100%-100px)]">
          <ul className="pt-10 px-6">
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
          <ul className="px-6">
            <li className="flex gap-3 items-center cursor-pointer text-[22px]">
              <IoLogOut /> Logout
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold text-center">Settings</h1>

          {/* New section for "Settings" and notification icon */}
          <div className="flex items-center justify-between bg-white p-4 shadow rounded">
            <div className="flex items-center gap-2">
              <MdOutlineSettings className="text-lg" />
              <span className="font-bold text-lg">Settings</span>
            </div>
            <MdOutlineNotifications className="text-lg cursor-pointer" />
          </div>

          <div className="space-y-4">
            <Link
              to="/Doc/payment-file"
              className="flex items-center justify-between bg-white p-6 shadow rounded p-5 rounded-lg shadow-md hover:bg-pink-200 transition-colors">
              <span>Mute Notification</span>
              <span className="text-xl"></span>
            </Link>
            <Link
              to="/Doc/leave-justification"
              className="flex items-center justify-between bg-white p-6 shadow rounded p-5 rounded-lg shadow-md hover:bg-pink-200 transition-colors">
              <span>Manage Devices</span>
              <span className="text-xl"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

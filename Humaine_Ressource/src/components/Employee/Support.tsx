import React from "react";
import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { RiBarChartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Support() {
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
              ddjj
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
        <div className="basis-[78%] container py-10">
          <h1 className="font-black text-3xl mb-10">Support</h1>

          {/* New section for "Settings" and notification icon */}

          {/* Adding space between the links */}
          <div className="space-y-4 mt-6">
            <Link
              to="/Doc/payment-file"
              className="flex items-center justify-between bg-white p-6 shadow rounded-lg hover:bg-pink-200 transition-colors">
              <span>Contact your Admin</span>
              <span className="text-3xl">→</span>
            </Link>
            <Link
              to="/Doc/payment-file"
              className="flex items-center justify-between bg-white p-6 shadow rounded-lg hover:bg-pink-200 transition-colors">
              <span>FAQ’s</span>
              <span className="text-3xl">→</span>
            </Link>
            <Link
              to="/Doc/leave-justification"
              className="flex items-center justify-between bg-white p-6 shadow rounded-lg hover:bg-pink-200 transition-colors">
              <span>MelinAI Bot</span>
              <span className="text-3xl">→</span>
            </Link>
            <Link
              to="/Doc/leave-justification"
              className="flex items-center justify-between bg-white p-6 shadow rounded-lg hover:bg-pink-200 transition-colors">
              <span>System Status and Updates</span>
              <span className="text-3xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;

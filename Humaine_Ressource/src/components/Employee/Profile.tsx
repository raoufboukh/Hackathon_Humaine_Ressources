import React from "react";
import { CgHome } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp, IoLogOut } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";

function Profile() {
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
        <h1 className="font-black text-3xl mb-5">Profile</h1>
        <div className="flex items-start gap-6">
          {/* Profile Image */}
          <div className=" w-40 h-40 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full "
            />
          </div>

          {/* Profile Details */}
          <div className="w-full">
            {/* First Name and Last Name */}
            <div className="flex justify-between items-center bg-white p-4 rounded-lg mb-4 shadow-sm">
              <div>
                <p className="font-semibold">Last Name:</p>
                <p>Dupont</p>
              </div>
              <div>
                <p className="font-semibold">First Name:</p>
                <p>Marie</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
              <p className="font-semibold">Email:</p>
              <p>marie.dupont@example.com</p>
            </div>

            {/* Phone Number */}
            <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
              <p className="font-semibold">Phone Number:</p>
              <p>+123 456 7890</p>
            </div>

            {/* Position */}
            <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
              <p className="font-semibold">Position:</p>
              <p>Software Engineer</p>
            </div>

            {/* Role */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">Role:</p>
              <p>Employee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

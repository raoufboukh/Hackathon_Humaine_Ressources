import React from "react";
import {
  FaLock,
  FaUserShield,
  FaFileContract,
  FaDatabase,
  FaInfoCircle,
  FaBalanceScale,
} from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const HRPrivacyPolicy = () => {
  return (
    <section className="flex">
      {/* Sidebar - Mimicking Performance component's sidebar */}
      <div className="bg-buttonColor basis-[22%] container py-10 text-white h-screen">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center">
            <FaLock className="w-7 h-7 text-buttonColor" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Privacy Policy</h2>
            <p>Human Resources</p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-12">
          <ul className="pt-10">
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <FaUserShield /> Personal Information
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <FaFileContract /> Data Usage
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <FaDatabase /> Data Protection
            </li>
            <li className="py-3 flex gap-3 items-center cursor-pointer text-[20px]">
              <FaBalanceScale /> Compliance
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="basis-[78%] container py-10">
        {/* Header with Notification Icon */}
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl">Privacy Policy Details</h1>
          <IoIosNotificationsOutline className="text-4xl cursor-pointer" />
        </div>

        {/* Privacy Policy Cards */}
        <div className="flex flex-wrap justify-center px-10 gap-10 py-10">
          {/* Personal Information Card */}
          <div className="bg-white rounded-xl p-6 flex-grow max-w-[400px]">
            <h2 className="text-xl font-bold mb-4 leading-7">
              Personal Information
            </h2>
            <div className="flex justify-between mb-3">
              <p>Types of Data Collected</p>
              <p className="text-green-500">Comprehensive</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Sensitive Information</p>
              <p className="text-green-500">Protected</p>
            </div>
            <div className="flex justify-between">
              <p>Consent Mechanism</p>
              <p className="text-green-500">Explicit</p>
            </div>
          </div>

          {/* Data Usage Card */}
          <div className="bg-white rounded-xl p-6 flex-grow max-w-[400px]">
            <h2 className="text-xl font-bold mb-4 leading-7">Data Usage</h2>
            <div className="flex justify-between mb-3">
              <p>Recruitment Processes</p>
              <p className="text-green-500">Secured</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Employment Management</p>
              <p className="text-green-500">Compliant</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-buttonColor text-white hover:bg-transparent hover:text-black transition-all duration-300 border-4 border-buttonColor px-3 py-1 text-sm rounded-lg ml-auto">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="px-10">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Privacy Principles</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaInfoCircle className="mr-2 text-buttonColor" />
                Transparency in data collection and usage
              </li>
              <li className="flex items-center">
                <FaInfoCircle className="mr-2 text-buttonColor" />
                Strict confidentiality and data protection
              </li>
              <li className="flex items-center">
                <FaInfoCircle className="mr-2 text-buttonColor" />
                Compliance with data protection regulations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRPrivacyPolicy;

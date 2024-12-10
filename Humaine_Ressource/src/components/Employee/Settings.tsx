import { RiArrowRightSLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function SettingsPage() {
  return (
    <section className="flex min-h-screen">
      <Dashboard />

      <div className="flex-1 flex justify-center">
        <div className="container py-10">
          <h1 className="font-black text-3xl mb-10">Settings</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            <Link
              to="/Doc/notification"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">
                Manage Notification
              </span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
            <Link
              to="/Doc/devices"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">Manage Devices</span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
            <Link
              to="/Doc/theme"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">Theme</span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
            <Link
              to="/Doc/colors"
              className="flex items-center justify-between bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span className="font-bold text-darkText">Colors</span>
              <RiArrowRightSLine className="text-3xl text-buttonColor" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

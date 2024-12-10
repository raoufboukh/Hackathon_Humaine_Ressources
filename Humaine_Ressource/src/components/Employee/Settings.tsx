import { MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";

import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
// import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <section className="flex">
      <Dashboard />

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
              className="flex items-center justify-between bg-white p-6 shadow rounded p-5 rounded-lg shadow-md hover:bg-pink-200 transition-colors"
            >
              <span>Mute Notification</span>
              <span className="text-xl"></span>
            </Link>
            <Link
              to="/Doc/leave-justification"
              className="flex items-center justify-between bg-white p-6 shadow rounded p-5 rounded-lg shadow-md hover:bg-pink-200 transition-colors"
            >
              <span>Manage Devices</span>
              <span className="text-xl"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

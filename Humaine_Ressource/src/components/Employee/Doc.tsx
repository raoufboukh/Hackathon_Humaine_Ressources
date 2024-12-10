import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Doc() {
  return (
    <section className="flex">
      <Dashboard />

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold text-center">Documents</h1>
          <div className="space-y-4">
            <Link
              to="/Doc/payment-file"
              className="flex items-center justify-between bg-white p-6 shadow rounded p-5 rounded-lg shadow-md hover:bg-pink-200 transition-colors"
            >
              <span>Payment File Request</span>
              <span className="text-xl">➔</span>
            </Link>
            <Link
              to="/Doc/leave-justification"
              className="flex items-center justify-between bg-white p-6 shadow rounded p-5  rounded-lg shadow-md hover:bg-pink-200 transition-colors"
            >
              <span>Leave Justification Paper Request</span>
              <span className="text-xl">➔</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

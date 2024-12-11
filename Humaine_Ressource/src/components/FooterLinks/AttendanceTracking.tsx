import React from "react";
import { FaCalendarCheck, FaClock, FaChartBar } from "react-icons/fa";

const AttendanceTracking = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Attendance Tracking
          </h1>
          <p className="text-gray-600">
            Monitor and manage employee attendance efficiently.
          </p>
        </header>

        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Human Resources Overview
          </h2>
          <p className="text-gray-600 mb-6">
            Ensure accurate attendance records, manage leave requests, and
            generate insightful reports to maintain productivity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaCalendarCheck className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Attendance Records</h3>
              <p className="mt-2">
                Track daily attendance, tardiness, and absenteeism with
                real-time updates.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaClock className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Leave Management</h3>
              <p className="mt-2">
                Simplify leave applications, approvals, and tracking for
                employees and managers.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaChartBar className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Reports & Analytics</h3>
              <p className="mt-2">
                Generate detailed reports and analyze attendance trends to
                optimize workforce management.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Attendance Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <h3 className="text-lg font-medium">John Doe</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Present: 20 days
              </p>
              <p className="text-gray-600 mt-1 group-hover:text-white transition duration-300">
                Leave: 5 days
              </p>
              <p className="text-gray-600 mt-1 group-hover:text-white transition duration-300">
                Absent: 1 day
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <h3 className="text-lg font-medium">Jane Smith</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Present: 22 days
              </p>
              <p className="text-gray-600 mt-1 group-hover:text-white transition duration-300">
                Leave: 3 days
              </p>
              <p className="text-gray-600 mt-1 group-hover:text-white transition duration-300">
                Absent: 1 day
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <h3 className="text-lg font-medium">Michael Brown</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Present: 18 days
              </p>
              <p className="text-gray-600 mt-1 group-hover:text-white transition duration-300">
                Leave: 7 days
              </p>
              <p className="text-gray-600 mt-1 group-hover:text-white transition duration-300">
                Absent: 1 day
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AttendanceTracking;

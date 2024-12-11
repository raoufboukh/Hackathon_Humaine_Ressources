import React from "react";
import { FaUser, FaUsers, FaBook } from "react-icons/fa";

const EmployeeManagement = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Employee Management
          </h1>
          <p className="text-gray-600 mt-7">
            Manage all aspects of employee data and resources effectively.
          </p>
        </header>

        {/* HR Overview Section */}
        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Human Resources Overview
          </h2>
          <p className="text-gray-600 mb-6">
            Keep track of employee details, hiring processes, training programs,
            and organizational policies in one place.
          </p>

          {/* Grid of HR Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Employee Records Card */}
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaUser className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Employee Records</h3>
              <p className="mt-2">
                Maintain accurate and up-to-date employee profiles, including
                roles, departments, and contact information.
              </p>
            </div>

            {/* Recruitment Card */}
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaUsers className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Recruitment</h3>
              <p className="mt-2">
                Streamline hiring processes with applicant tracking, interview
                scheduling, and candidate evaluations.
              </p>
            </div>

            {/* Training Programs Card */}
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaBook className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Training Programs</h3>
              <p className="mt-2">
                Organize and monitor employee training sessions to enhance
                skills and ensure compliance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeManagement;

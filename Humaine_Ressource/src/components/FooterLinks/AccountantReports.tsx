import React from "react";
import {
  FaFileAlt,
  FaChartBar,
  FaRegCalendarAlt,
  FaBalanceScale,
} from "react-icons/fa";

const AccountantReports = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Accountant Reports Management
          </h1>
          <p className="text-gray-600 mt-7">
            A comprehensive solution for managing and analyzing financial
            reports in HR processes, including URG and CNAS compliance.
          </p>
        </header>

        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 mb-6">
            Streamline financial reporting and ensure accurate, efficient
            handling of HR-related accounts, including social security and URG
            compliance in Algeria.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaFileAlt className="text-2xl mb-2" />
              <h3 className="text-lg font-medium group-hover:text-white">
                Salary Reports
              </h3>
              <p className="mt-2 group-hover:text-white">
                Generate detailed salary breakdowns, tax deductions, and payment
                summaries.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaChartBar className="text-2xl mb-2" />
              <h3 className="text-lg font-medium group-hover:text-white">
                Analytics Dashboard
              </h3>
              <p className="mt-2 group-hover:text-white">
                Visualize payroll trends, monitor financial KPIs, and optimize
                resource allocation.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaRegCalendarAlt className="text-2xl mb-2" />
              <h3 className="text-lg font-medium group-hover:text-white">
                Tax Compliance
              </h3>
              <p className="mt-2 group-hover:text-white">
                Automate tax calculations and ensure compliance with local
                regulations, including URG and CNAS requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Definitions of URG & CNAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaBalanceScale className="text-2xl mb-2" />
              <h3 className="text-lg font-medium group-hover:text-white">
                URG (Union Régionale des Garanties)
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-white">
                URG ensures proper financial guarantees and accountability in
                payroll processing. It aligns financial practices with regional
                standards in Algeria.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaBalanceScale className="text-2xl mb-2" />
              <h3 className="text-lg font-medium group-hover:text-white">
                CNAS (Caisse Nationale des Assurances Sociales)
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-white">
                CNAS manages social security contributions and benefits,
                ensuring compliance with Algerian social welfare laws.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountantReports;

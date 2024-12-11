import React from "react";
import {
  FaFileInvoiceDollar,
  FaUserTie,
  FaClipboardList,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

const PaymentFiles = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Payment Files Management
          </h1>
          <p className="text-gray-600">
            Simplifying interactions between employees, employers, and
            accountants through digitalized HR processes.
          </p>
        </header>

        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 mb-6">
            A centralized system for managing payment files and enhancing
            transparency and efficiency in HR processes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaFileInvoiceDollar className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Employee Access</h3>
              <p className="mt-2">
                Employees can view and download their salary slips, track
                payments, and review deductions.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaUserTie className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Employer Supervision</h3>
              <p className="mt-2">
                Employers can validate payment records, approve bonuses, and
                monitor payroll operations.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaClipboardList className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Payroll Management</h3>
              <p className="mt-2">
                Accountants can calculate salaries, manage deductions, and
                prepare tax declarations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Advanced Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaCloud className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Cloud Integration</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Securely store and access payment data from any device through
                cloud solutions.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaShieldAlt className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Data Security</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Ensure compliance and protect sensitive payment details with
                robust security measures.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <FaFileInvoiceDollar className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Real-Time Updates</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Automate payroll updates and track changes in real-time to
                maintain accuracy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentFiles;
